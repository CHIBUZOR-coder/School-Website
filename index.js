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
  var checkoutContainer = document.querySelector(".checkout");

  checkoutContainer.addEventListener("mouseover", function () {
    checkoutContainer.style.backgroundColor = "rgb(146, 143, 143)"; // Change this to your desired background color
    var checkoutChild = checkoutContainer.querySelector(".checkoutChild");
    checkoutChild.style.color = "#ffffff"; // Change this to your desired text color
  });

  checkoutContainer.addEventListener("mouseout", function () {
    checkoutContainer.style.backgroundColor = ""; // Revert to default background color
    var checkoutChild = checkoutContainer.querySelector(".checkoutChild");
    checkoutChild.style.color = ""; // Revert to default text color
  });
});









document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(".moving-element");

  function animateElements() {
    // Only animate if the screen width is greater than 700px
    if (window.innerWidth > 700) {
      elements.forEach(function (element, index) {
        // Determine the animation group based on index
        var group = index % 4;

        setTimeout(function () {
          if (group === 0 || group === 2) {
            element.style.transform = "translateY(-100%)"; // Move up
          } else {
            element.style.transform = "translateY(100%)"; // Move down
          }
          element.style.opacity = "0"; // Make it invisible
        }, index * 4000); // Adjust the delay for slower animation

        setTimeout(
          function () {
            // Reset properties after a delay
            element.style.transform = "translateY(0)";
            element.style.opacity = "1";
          },
          index * 4000 + 2000 // Adjust the delay for slower animation
        );
      });


      // Call the function recursively for continuous looping
      setTimeout(animateElements, elements.length * 4000);
    }
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

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".sticky");
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = navbar.offsetHeight;
  var isNavbarHidden = false;

  window.addEventListener("scroll", function () {
    var st = window.scrollY;

    // Check if user is scrolling down and has scrolled more than the delta value
    if (Math.abs(lastScrollTop - st) > delta) {
      if (st > lastScrollTop && st > navbarHeight) {
        // Scrolling down, hide the navbar
        if (!isNavbarHidden) {
          navbar.style.transition = "transform 0.8s ease";
          navbar.style.transform = "translateY(-100%)";
          isNavbarHidden = true;
        }
      } else {
        // Scrolling up or at the top, show the navbar
        if (isNavbarHidden) {
          navbar.style.transition = "transform 0.8s ease";
          navbar.style.transform = "translateY(0)";
          isNavbarHidden = false;
        }
      }
      lastScrollTop = st;
    }
  });
});