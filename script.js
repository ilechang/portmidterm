// Select the image element
const creativeImage = document.querySelector('.creative');

// Initialize variables
let imageIndex = 1;
const totalImages = 16;

// Function to change the image source
function changeImage() {
  // Update the image src attribute
  creativeImage.src = `./creative${imageIndex}.png`;

  // Update the index for the next image
  imageIndex++;

  // Reset index if it exceeds the total number of images
  if (imageIndex > totalImages) {
    imageIndex = 1;
  }
}

// Run changeImage every 100 milliseconds (0.1 seconds)
setInterval(changeImage, 100);




function startAnimation() {
  let num = 0;
  const span = document.querySelector(".aninum");

  function updateNumber(delay) {
    if (num < 4) {
      num++;
      span.textContent = `${num} years`;

      // Increase delay (slows down over time)
      setTimeout(() => updateNumber(delay * 1.5), delay);
    } else {
      // Toggle entire text opacity twice
      toggleOpacity(2);
    }
  }

  function toggleOpacity(times) {
    if (times > 0) {
      span.style.opacity = "0.5";
      setTimeout(() => {
        span.style.opacity = "1";
        setTimeout(() => toggleOpacity(times - 1), 500); // Repeat toggle
      }, 500);
    }
  }

  updateNumber(100); // Start fast at 100ms delay
}

// Run the animation every 4 seconds
startAnimation();
setInterval(startAnimation, 5500);





// Select the elements
const developerText = document.querySelector('.developer');
const designerText = document.querySelector('.designer');

// Initial color states
let isOrange = true;

// Function to toggle colors
function toggleColors() {
  if (isOrange) {
    developerText.style.color = "#f9ac54";
    designerText.style.color = "black";
  } else {
    developerText.style.color = "black";
    designerText.style.color = "#f9ac54";
  }

  // Toggle the state
  isOrange = !isOrange;
}

// Run toggleColors every 800 milliseconds (0.8 seconds)
setInterval(toggleColors, 800);