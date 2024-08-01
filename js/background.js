// const images = ["1.jpg", "2.jpg", "3.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const chosenImage = `${Math.floor(Math.random() * 14)}.jpg`;

// const body = document.querySelector("body");

// body.style.backgroundImage = `url("img/${chosenImage}")`;

// body.style.backgroundImage = `url("img/1.jpg")`;

const button = document.querySelector("button.background_refresh");

button.addEventListener("click", handleBgRefresh);

function handleBgRefresh() {
  const chosenImage = `${Math.floor(Math.random() * 14)}.jpg`;
  const body = document.querySelector("body");
  body.style.backgroundImage = `url("img/${chosenImage}")`;
  button.innerText = Math.floor(Math.random() * 10);
}

handleBgRefresh();
