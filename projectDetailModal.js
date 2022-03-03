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

const textP = document.querySelector('.project-detail-text-p');
const multiPostStories = document.querySelector('.project-detail-multi-post-stories');

const projectDetails = [
  {
    title: 'Multi Post Stories 123',
    image: 'Snapshoot-Portfolio.svg',
    mageAlt: '',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita',
    technologies: ['html', 'css', 'JavaScript'],
    sourceCode: 'https://github.com/sangwa7/Portifolio',
    seeLive: 'https://sangwa7.github.io/Portifolio/',
  },
];

const imageDirectory = 'img/';
let ProjectDetailText = '';
let ProjectDetailTitle = '';

Array.from(projectDetails).forEach((project) => {
  ProjectDetailText += project.text;
  ProjectDetailTitle += project.title;
  const image = document.getElementById('project-img');
  image.src = imageDirectory + project.image;
  image.alt = imageDirectory + project.imageAlt;
  const seeLive = document.getElementById('project-detail-button-1');
  seeLive.href = project.seeLive;
  const source = document.getElementById('project-detail-button-2');
  source.href = project.sourceCode;
});

textP.innerHTML = ProjectDetailText;
multiPostStories.innerHTML = ProjectDetailTitle;
