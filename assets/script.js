(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      const menu = link.closest('details');
      if (menu) menu.removeAttribute('open');
    });
  });
})();
