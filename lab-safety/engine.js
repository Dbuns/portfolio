(function(root){
  'use strict';
  function empty(){return {done:[],name:'',acknowledgment:null,result:null,active:null,expired:null,lastLayout:null};}
  function random(){if(root.crypto?.getRandomValues){const n=new Uint32Array(1);root.crypto.getRandomValues(n);return n[0]/4294967296;}return Math.random();}
  function permutation(a,expected){return Array.isArray(a)&&a.length===expected.length&&new Set(a).size===a.length&&expected.every(v=>a.includes(v));}
  function validLayout(l,c){return !!l&&permutation(l.questions,c.questions.map(q=>q.id))&&c.questions.every(q=>permutation(l.options?.[q.id],q.options.map((_,i)=>i)));}
  function canonical(c){return {questions:c.questions.map(q=>q.id),options:Object.fromEntries(c.questions.map(q=>[q.id,q.options.map((_,i)=>i)]))};}
  function shuffled(a,previous,rng){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[b[i],b[j]]=[b[j],b[i]];}if(b.length>1&&b.every((v,i)=>v===previous?.[i]))b.push(b.shift());return b;}
  function makeLayout(c,previous,rng=random){const base=canonical(c),old=validLayout(previous,c)?previous:base;return {questions:shuffled(base.questions,old.questions,rng),options:Object.fromEntries(c.questions.map(q=>[q.id,shuffled(base.options[q.id],old.options[q.id],rng)]))};}
  function orderedQuestions(c,layout){const l=validLayout(layout,c)?layout:canonical(c);return l.questions.map(id=>c.questions.find(q=>q.id===id));}
  function duration(ms){if(!Number.isFinite(ms)||ms<0)return '—';const seconds=Math.floor(ms/1000);return `${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;}
  function validAnswers(input,c){const a={};c.questions.forEach(q=>{const v=input?.[q.id];if(Number.isInteger(v)&&v>=0&&v<q.options.length)a[q.id]=v;});return a;}
  function score(a,c){return 100*c.questions.filter(q=>a[q.id]===q.answer).length/c.questions.length;}
  function sanitise(raw,c){
    const s=empty();if(!raw||typeof raw!=='object')return s;
    s.done=[...new Set(Array.isArray(raw.done)?raw.done.filter(i=>Number.isInteger(i)&&i>=0&&i<c.modules.length):[])];
    s.name=typeof raw.name==='string'?raw.name.slice(0,100):'';
    const r=raw.result;
    if(r&&Number.isFinite(Date.parse(r.date))&&typeof r.attemptId==='string'){
      const answers=validAnswers(r.answers,c);
      const timed=Number.isFinite(r.started)&&Number.isFinite(r.submitted)&&r.submitted===Date.parse(r.date)&&r.submitted>=r.started&&r.submitted-r.started<c.examMinutes*60000;
      s.result={answers,score:score(answers,c),date:r.date,attemptId:r.attemptId.slice(0,80),layout:validLayout(r.layout,c)?r.layout:canonical(c),started:timed?r.started:null,submitted:timed?r.submitted:null,elapsedMs:timed?r.submitted-r.started:null,corrected:[...new Set((Array.isArray(r.corrected)?r.corrected:[]).filter(id=>c.questions.some(q=>q.id===id&&q.critical)))]};
    }
    const a=raw.active;
    if(!s.result&&a&&Number.isFinite(a.started)&&Number.isFinite(a.deadline)&&a.deadline===a.started+c.examMinutes*60000&&typeof a.attemptId==='string'&&validLayout(a.layout,c))s.active={started:a.started,deadline:a.deadline,attemptId:a.attemptId.slice(0,80),answers:validAnswers(a.answers,c),warned:a.warned===true,layout:a.layout};
    s.lastLayout=validLayout(raw.lastLayout,c)?raw.lastLayout:s.active?.layout??s.result?.layout??null;
    const e=raw.expired;if(e&&Number.isFinite(e.deadline))s.expired={deadline:e.deadline,answers:validAnswers(e.answers,c),layout:validLayout(e.layout,c)?e.layout:canonical(c),acknowledged:e.acknowledged===true};
    const ack=raw.acknowledgment;
    if(ack&&ack.name===s.name&&ack.version===c.version&&ack.attemptId===s.result?.attemptId&&Number.isFinite(Date.parse(ack.date))&&eligible(s,c))s.acknowledgment={name:s.name,version:c.version,attemptId:s.result.attemptId,date:ack.date};
    return s;
  }
  function eligible(s,c){return s.done.length===c.modules.length&&!!s.result&&score(s.result.answers,c)>=c.passPercent&&c.questions.every(q=>!q.critical||s.result.answers[q.id]===q.answer||s.result.corrected.includes(q.id));}
  function certificateReady(s,c){const a=s.acknowledgment;return eligible(s,c)&&!!s.name.trim()&&!!a&&a.name===s.name&&a.version===c.version&&a.attemptId===s.result.attemptId&&Number.isFinite(Date.parse(a.date));}
  function acknowledge(s,c,name,now){if(!eligible(s,c)||typeof name!=='string'||!name.trim()||!Number.isFinite(now))return false;s.name=name.trim().slice(0,100);s.acknowledgment={name:s.name,version:c.version,attemptId:s.result.attemptId,date:new Date(now).toISOString()};return true;}
  function start(s,c,now,id){if(s.done.length!==c.modules.length||s.active||s.result)return false;const layout=makeLayout(c,s.lastLayout);s.active={started:now,deadline:now+c.examMinutes*60000,answers:{},attemptId:id,warned:false,layout};s.lastLayout=layout;s.expired=null;s.acknowledgment=null;return true;}
  function expire(s,now){if(!s.active||now<s.active.deadline)return false;s.expired={deadline:s.active.deadline,answers:{...s.active.answers},layout:s.active.layout,acknowledged:false};s.active=null;s.result=null;return true;}
  function submit(s,c,now){if(expire(s,now))return 'expired';if(!s.active)return 'inactive';if(!Number.isFinite(now)||now<s.active.started)return 'invalid-time';s.result={answers:{...s.active.answers},score:score(s.active.answers,c),corrected:[],date:new Date(now).toISOString(),started:s.active.started,submitted:now,elapsedMs:now-s.active.started,layout:s.active.layout,attemptId:s.active.attemptId};s.active=null;s.acknowledgment=null;return 'submitted';}
  root.ExamEngine={empty,sanitise,validAnswers,score,eligible,certificateReady,acknowledge,start,expire,submit,makeLayout,validLayout,orderedQuestions,duration};
})(typeof window!=='undefined'?window:globalThis);
