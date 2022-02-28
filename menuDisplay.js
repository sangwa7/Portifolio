function mobileMenu() {
  const elements = document.getElementsByClassName('mobile-menu');
  Array.from(elements).forEach((x) => {
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  });
}
mobileMenu();
