// Mobile slide-out menu (desktop uses the inline menu under the title).
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Slideout === 'undefined') return;
  var slideout = new Slideout({
    panel: document.getElementById('panel'),
    menu: document.getElementById('menu'),
    padding: 256,
    tolerance: 70
  });
  var btn = document.querySelector('.toggle-button');
  if (btn) btn.addEventListener('click', function () { slideout.toggle(); });
  document.querySelectorAll('#menu a').forEach(function (a) {
    a.addEventListener('click', function () { slideout.close(); });
  });
});
