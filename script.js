const dogImage = document.getElementById("dogImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElemntById("nextBtn");


let currentImageIndex = 0;

let dogImages = [];


async function fetchDogImages() {
  const response= await fetch('https://api.thedogapi.com/v1/images/search?limit=5');
  const data = await response.json();
  dogImages = data.map(item => item.url);
  updateImage();
}


function showPrevImage() {
  if (curentImageIndex > 0) {
    currentImageIndex--;
  } else {
currentImageIndex = dogImages.length - 1;
  }
}


prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

fetchDogImages();