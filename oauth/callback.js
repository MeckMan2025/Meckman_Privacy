/* Reads the OAuth authorization code out of the address bar and shows it.
   Deliberately contains no network calls, and the page's content security policy
   omits connect-src entirely so the browser would block one anyway. */
(function () {
  var out = document.getElementById('result');
  var params = new URLSearchParams(window.location.search);
  var code = params.get('code');
  var error = params.get('error');

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  out.textContent = '';

  if (error) {
    out.appendChild(el('p', 'lede', 'Authorization failed.'));
    var d = el('p', null, params.get('error_description') || error);
    out.appendChild(d);
    out.appendChild(el('p', null, 'Start over with: ./health auth-whoop --manual'));
    return;
  }

  if (!code) {
    out.appendChild(el('p', 'lede', 'No authorization code in this URL.'));
    out.appendChild(el('p', null,
      'This page only does something useful when an OAuth provider redirects here with a code.'));
    return;
  }

  var box = el('pre');
  box.id = 'code';
  box.textContent = code;
  out.appendChild(box);

  var btn = el('button', null, 'Copy code');
  btn.type = 'button';
  btn.addEventListener('click', function () {
    var done = function () { btn.textContent = 'Copied'; setTimeout(function () {
      btn.textContent = 'Copy code'; }, 1600); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(done, function () { select(); });
    } else {
      select();
    }
  });
  out.appendChild(btn);

  function select() {
    var r = document.createRange();
    r.selectNodeContents(box);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(r);
    btn.textContent = 'Selected, press Cmd+C';
  }

  var st = params.get('state');
  if (st) {
    var s = el('p', 'statenote', 'state: ' + st);
    out.appendChild(s);
  }
})();
