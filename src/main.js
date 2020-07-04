const shareIcon = document.getElementById('shareIcon');
const shareArticle = document.getElementById('shareDiv');
const closeShare = document.getElementById('closeShare');

shareIcon.addEventListener('click', () => {
  shareArticle.style.display = 'grid';
});

window.addEventListener('click', (event) => {
  event.target === closeShare ? (shareArticle.style.display = 'none') : false;
});
