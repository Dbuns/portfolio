(function(root){
  'use strict';
  function empty(){return {done:[],name:'',result:null,active:null,expired:null};}
  function validAnswers(input,c){const a={};c.questions.forEach(q=>{const v=input?.[q.id];if(Number.isInteger(v)&&v>=0&&v<q.options.length)a[q.id]=v;});return a;}
  function score(a,c){return 100*c.questions.filter(q=>a[q.id]===q.answer).length/c.questions.length;}
  function sanitise(raw,c){
    const s=empty();if(!raw||typeof raw!=='object')return s;
    s.done=[...new Set(Array.isArray(raw.done)?raw.done.filter(i=>Number.isInteger(i)&&i>=0&&i<c.modules.length):[])];
    s.name=typeof raw.name==='string'?raw.name.slice(0,100):'';
    const r=raw.result;
    if(r&&Number.isFinite(Date.parse(r.date))&&typeof r.attemptId==='string'){
      const answers=validAnswers(r.answers,c);
      s.result={answers,score:score(answers,c),date:r.date,attemptId:r.attemptId.slice(0,80),corrected:[...new Set((Array.isArray(r.corrected)?r.corrected:[]).filter(id=>c.questions.some(q=>q.id===id&&q.critical)))]};
    }
    const a=raw.active;
    if(!s.result&&a&&Number.isFinite(a.started)&&Number.isFinite(a.deadline)&&a.deadline===a.started+c.examMinutes*60000&&typeof a.attemptId==='string')s.active={started:a.started,deadline:a.deadline,attemptId:a.attemptId.slice(0,80),answers:validAnswers(a.answers,c),warned:a.warned===true};
    const e=raw.expired;if(e&&Number.isFinite(e.deadline))s.expired={deadline:e.deadline,answers:validAnswers(e.answers,c),acknowledged:e.acknowledged===true};
    return s;
  }
  function eligible(s,c){return s.done.length===c.modules.length&&!!s.result&&score(s.result.answers,c)>=c.passPercent&&c.questions.every(q=>!q.critical||s.result.answers[q.id]===q.answer||s.result.corrected.includes(q.id));}
  function start(s,c,now,id){if(s.done.length!==c.modules.length||s.active||s.result)return false;s.active={started:now,deadline:now+c.examMinutes*60000,answers:{},attemptId:id,warned:false};s.expired=null;return true;}
  function expire(s,now){if(!s.active||now<s.active.deadline)return false;s.expired={deadline:s.active.deadline,answers:{...s.active.answers},acknowledged:false};s.active=null;s.result=null;return true;}
  function submit(s,c,now){if(expire(s,now))return 'expired';if(!s.active)return 'inactive';s.result={answers:{...s.active.answers},score:score(s.active.answers,c),corrected:[],date:new Date(now).toISOString(),attemptId:s.active.attemptId};s.active=null;return 'submitted';}
  root.ExamEngine={empty,sanitise,validAnswers,score,eligible,start,expire,submit};
})(typeof window!=='undefined'?window:globalThis);
