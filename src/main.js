const shareIcon = document.getElementById('shareIcon');
const shareArticle = document.getElementById('shareDiv');
const closeShare = document.getElementById('closeShare');

shareIcon.addEventListener('click', () => {
  shareArticle.style.display = 'grid';
});
