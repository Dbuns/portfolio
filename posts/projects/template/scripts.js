// -- COPY + COLLAPSE SCRIPTS

function copyCode(btn) {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = 'Copied!';
      setTimeout(() => (btn.textContent = 'Copy'), 2000);
    });
}

function toggleCollapse(btn) {
    const content = btn.nextElementSibling;
    const expanded = content.classList.toggle('open');
    btn.textContent = expanded ? 'Hide Code' : 'Show Code';
}

