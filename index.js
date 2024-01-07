document.addEventListener("DOMContentLoaded", function () {
  // Array of background image URLs for the hero section
  var heroImages = ["Imagess/unipics.jpg", "Imagess/study.jpg"];
  var currentIndex = 0;
  var text = document.querySelector(".text");
  console.log(text);

  function changeHeroBackgroundImage() {
    currentIndex = (currentIndex + 1) % heroImages.length;
    var heroElement = document.querySelector(".Hero");
    heroElement.style.backgroundImage = "url(" + heroImages[currentIndex] + ")";

    // Apply specific text color class based on the index
    if (currentIndex === 1) {
      text.style.color = "white";
    } else {
      text.style.color = "black";
    }
  }

  // Change hero background image every 5 seconds (adjust the interval as needed)
  setInterval(changeHeroBackgroundImage, 5000);
});


