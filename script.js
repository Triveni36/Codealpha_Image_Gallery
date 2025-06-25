function filterImages(category) {
  let images = document.querySelectorAll(".gallery img");
  images.forEach((img) => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

// Simple lightbox view
function openLightbox(imgElement) {
  let lightbox = document.getElementById('lightbox');
  let lightboxImg = document.getElementById('lightbox-img');

  lightbox.style.display = 'flex';
  lightboxImg.src = imgElement.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}