// ---------- Image Carousel ----------
const images = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d", // City
  "https://images.unsplash.com/photo-1494526585095-c41746248156", // Nature
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"  // Abstract
];

let current = 0;

function showImage() {
  document.getElementById("carousel-img").src = images[current];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage();
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage();
}

// ---------- Joke API ----------
async function getJoke() {
  const jokeBox = document.getElementById("joke-result");
  jokeBox.innerText = "Loading...";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await res.json();
    jokeBox.innerText = `${data.setup} 🤣 ${data.punchline}`;
  } catch (error) {
    jokeBox.innerText = "❌ Failed to fetch joke.";
  }
}
