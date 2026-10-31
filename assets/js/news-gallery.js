let currentImages = [];
let currentImageIndex = 0;

function openImageModal(element) {
  const imagesData = element.closest(".news-images-gallery").getAttribute("data-images");
  currentImages = JSON.parse(imagesData);
  currentImageIndex = 0;

  showCurrentImage();
  document.getElementById("imageModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function showCurrentImage() {
  document.getElementById("modalImage").src = currentImages[currentImageIndex];
  const counter = document.getElementById("modalCounter");
  counter.textContent = `${currentImageIndex + 1} of ${currentImages.length}`;
  counter.style.display = currentImages.length > 1 ? "block" : "none";
}

function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
  document.body.style.overflow = "auto";
}

function nextImage() {
  if (currentImageIndex < currentImages.length - 1) {
    currentImageIndex++;
    showCurrentImage();
  }
}

function prevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    showCurrentImage();
  }
}

// Close modal when clicking outside the image
document.addEventListener("click", function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    closeImageModal();
  }
});
