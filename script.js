const projectImage = document.querySelector('.project-image');
const rightArrow = document.getElementById('arrow-right');
const imageSrc1 = 'project1photo1.png';
const imageSrc2 = 'project1photo2.png';
const imageSrc3 = 'projecr1photo3.png';

rightArrow.addEventListener('click', () => {
  if (projectImage.src.includes(imageSrc1)) {
    projectImage.src = imageSrc2;
  } else {
    projectImage.src = imageSrc1;
  }
});
