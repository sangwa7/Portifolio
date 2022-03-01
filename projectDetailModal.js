function projectDetail() {
  const elements = document.getElementsByClassName('project-detail');
  Array.from(elements).forEach((x) => {
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  });
}
projectDetail();
