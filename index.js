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

 document.addEventListener("DOMContentLoaded", function () {
   var elements = document.querySelectorAll(".moving-element");

   function animateElements() {
     elements.forEach(function (element, index) {
       setTimeout(function () {
         element.style.transform = "translateX(100%)"; // Move to the right
         element.style.opacity = "0"; // Make it invisible
       }, index * 1000); // Adjust the delay as needed

       setTimeout(
         function () {
           // Reset properties after a delay
           element.style.transform = "translateX(0)";
           element.style.opacity = "1";
         },
         index * 1000 + 500
       ); // Adjust the delay as needed
     });

     // Call the function recursively for continuous looping
     setTimeout(animateElements, elements.length * 1000);
   }

   // Call the animation function
   animateElements();
 });