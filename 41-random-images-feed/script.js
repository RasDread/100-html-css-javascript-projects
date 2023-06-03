const container = document.querySelector(".content");
const baseURL = "https://source.unsplash.com/random/";
const rows = 7;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `https://source.unsplash.com/random/?Horses&${randomNumber()}`;
  container.appendChild(img);
}

function randomNumber() {
  return Math.floor(Math.random() * 1000);
}
