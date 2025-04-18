const dogImage = document.getElementById("dogImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn"); 

let currentImageIndex = 0;
let dogImages = [];

async function fetchDogImages() {
  try {
    const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=5');
    const data = await response.json();
    dogImages = data.map(item => item.url);
    updateImage(); 
  } catch (error) {
    console.error("Error fetching dog images:", error);
  }
}

function updateImage() {
  if (dogImages.length > 0) {
    dogImage.src = dogImages[currentImageIndex];
  }
}

function showPrevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
  } else {
    currentImageIndex = dogImages.length - 1;
  }
  updateImage(); 
}

function showNextImage() {
  if (currentImageIndex < dogImages.length - 1) {
    currentImageIndex++;
  } else {
    currentImageIndex = 0;
  }
  updateImage(); 
}

prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

fetchDogImages(); 