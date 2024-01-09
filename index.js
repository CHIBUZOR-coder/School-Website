document.addEventListener("DOMContentLoaded", function () {
  // Array of background image URLs for the hero section
  var heroImages = ["Imagess/unipics.jpg", "Imagess/study.jpg"];
  var currentIndex = 0;
  var moving_element = document.querySelectorAll(".moving-element");
  var menu = document.querySelector('#menu');
  var checkout = document.querySelector('.checkout');
  var checkoutchild = document.querySelector(".checkoutChild");
  console.log(menu);



  function changeHeroBackgroundImage() {
    currentIndex = (currentIndex + 1) % heroImages.length;
    var heroElement = document.querySelector(".Hero");
    heroElement.style.backgroundImage = "url(" + heroImages[currentIndex] + ")";

    // Apply specific text color class based on the index
    if (currentIndex === 1) {
      for (var i = 0; i < moving_element.length; i++) {
         moving_element[i].style.backgroundColor = "rgba(10, 8, 8, 0.2)";
        moving_element[i].style.color = "white";
      }
    } else {
      for (var i = 0; i < moving_element.length; i++) {
        moving_element[i].style.backgroundColor = "rgba(10, 8, 8, 0.5)";
           
      }
    }
  }

  // Change hero background image every 5 seconds (adjust the interval as needed)
  setInterval(changeHeroBackgroundImage, 5000);
});



document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".moving-element");

  function animateElements() {
    elements.forEach(function (element, index) {
      // Determine the animation group based on index
      var group = index % 4;

      // Only animate if the screen width is greater than 700px
      if (window.innerWidth > 700) {
        setTimeout(function () {
          if (group === 0 || group === 2) {
            element.style.transform = "translateY(-100%)"; // Move up
          } else {
            element.style.transform = "translateY(100%)"; // Move down
          }
          element.style.opacity = "0"; // Make it invisible
        }, index * 1500); // Adjust the delay as needed

        setTimeout(
          function () {
            // Reset properties after a delay
            element.style.transform = "translateY(0)";
            element.style.opacity = "1";
          },
          index * 1500 + 750
        ); // Adjust the delay as needed
      }
    });

    // Call the function recursively for continuous looping
    setTimeout(animateElements, elements.length * 1500);
  }

  // Call the animation function initially
  animateElements();

  // Listen for window resize event
  window.addEventListener("resize", function () {
    // Clear previous timeouts to prevent overlapping animations
    clearTimeout();
    // Restart animation only if screen width is greater than 700px
    if (window.innerWidth > 700) {
      animateElements();
    }
  });
});


 var checkout = document.querySelector(".checkout");
  var checkoutchild = document.querySelector(".checkoutChild");

 checkout.addEventListener("mouseenter", function () {
    checkoutchild.style.color = "#fff";
    checkout.style.backgroundColor = " rgba(146, 143, 143, 0.55)";
  
 });

 checkout.addEventListener("mouseleave", function () {

  checkout.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  checkoutchild.style.color = "rgb(146, 143, 143)";
  
 });



// document.addEventListener("DOMContentLoaded", function () {
//   var elements = document.querySelectorAll(".moving-element");
//   var animationTimeout;

//   function animateElements() {
//     elements.forEach(function (element, index) {
//       var group = index % 4;

//       setTimeout(function () {
//         if (group === 0 || group === 2) {
//           element.style.transform = "translateY(-100%)"; // Move up
//         } else {
//           element.style.transform = "translateY(100%)"; // Move down
//         }
//         element.style.opacity = "0"; // Make it invisible
//       }, index * 1500);

//       setTimeout(
//         function () {
//           element.style.transform = "translateY(0)";
//           element.style.opacity = "1";
//         },
//         index * 1500 + 750
//       );
//     });

//     // Call the function recursively for continuous looping
//     animationTimeout = setTimeout(animateElements, elements.length * 1500);
//   }

//   function handleResize() {
//     // Clear previous timeouts to prevent overlapping animations
//     clearTimeout(animationTimeout);

//     // Stop ongoing animations immediately
//     elements.forEach(function (element) {
//       element.style.transition = "none";
//       element.style.transform = "translateY(0)";
//       element.style.opacity = "1";
//     });

//     // Restart animation only if screen width is greater than 700px
//     if (window.innerWidth > 700) {
//       // Restore transition and start animation
//       elements.forEach(function (element) {
//         element.style.transition = "";
//       });
//       animateElements();
//     }
//   }

//   // Call the animation function initially
//   animateElements();

//   // Listen for window resize event
//   window.addEventListener("resize", handleResize);
// });


// document.addEventListener("DOMContentLoaded", function () {
//   var elements = document.querySelectorAll(".moving-element");
//   var animationTimeout;

//   function animateElements() {
//     elements.forEach(function (element, index) {
//       var group = index % 4;

//       setTimeout(function () {
//         if (group === 0 || group === 2) {
//           element.style.transform = "translateY(-100%)"; // Move up
//         } else {
//           element.style.transform = "translateY(100%)"; // Move down
//         }
//         element.style.opacity = "0"; // Make it invisible
//       }, index * 1500);

//       setTimeout(
//         function () {
//           element.style.transform = "translateY(0)";
//           element.style.opacity = "1";
//         },
//         index * 1500 + 750
//       );
//     });

//     // Call the function recursively for continuous looping
//     animationTimeout = setTimeout(animateElements, elements.length * 1500);
//   }

//   function handleResize() {
//     // Clear previous timeouts to prevent overlapping animations
//     clearTimeout(animationTimeout);

//     // Stop ongoing animations immediately
//     elements.forEach(function (element) {
//       element.style.transition = "none";
//       element.style.transform = "translateY(0)";
//       element.style.opacity = "1";
//     });

//     // Ensure the browser repaints before restoring the transition
//     requestAnimationFrame(function () {
//       // Restore transition and start animation only if screen width is greater than 700px
//       if (window.innerWidth > 700) {
//         elements.forEach(function (element) {
//           element.style.transition = "";
//         });
//         animateElements();
//       }
//     });
//   }

//   // Call the animation function initially
//   animateElements();

//   // Listen for window resize event
//   window.addEventListener("resize", handleResize);
// });


 