const card = document.querySelector(".card");
const container = document.querySelector(".container");

// items

const title = document.querySelector(".title");
const models = document.querySelector(".models");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const car = document.querySelector(".car img");

// animation event

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// animate in

container.addEventListener("mouseenter", (e) => {
  card.style.trasition = "none";

  title.style.transform = "translateZ(150px)";
  car.style.transform = "translateZ(200px) rotateZ(5deg)";
  description.style.transform = "translateZ(125px)";
  models.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

// animate out

container.addEventListener("mouseleave", (e) => {
  card.style.trasition = "all 0.5 ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  // Popback

  title.style.transform = "translateZ(0)";
  car.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  models.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
