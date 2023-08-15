// Add this script at the end of your HTML body or in a separate .js file
const imageUrls = [
  "./img/Doctors Lounge_1.png",
  "./img/Doctors Lounge_2.png",
  "./img/Townhall.png",
  "/img/Waiting Area_1.png",
  "/img/Waiting Area_2.png",
  "/img/Waiting Area_3.png",
  "/img/Waiting Area_4.png",
];

let slideIndex = 0;

function showSlides() {
  const container = document.getElementById("slideshow-container");
  container.innerHTML = ""; // Clear the container

  for (let i = 0; i < imageUrls.length; i++) {
    const slide = document.createElement("div");
    slide.className = "mySlides fade";
    const img = document.createElement("img");
    img.src = imageUrls[i];
    img.style.width = "100%";
    slide.appendChild(img);
    container.appendChild(slide);
  }

  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();
