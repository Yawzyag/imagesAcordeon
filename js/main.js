let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0,
  url = "https://source.unsplash.com/random",
  imgRandom = document.querySelector("#img-random"),
  boton = document.querySelector("#boton");

boton.addEventListener("click", cambiarImg);

window.onload = document.head.childNodes[9].setAttribute(
  "href",
  "../img/acorn_PNG37019.png"
);

// document.getElementsByClassName("slide1")[0].style.backgroundImage =
//   "url('../img/image1.jpg')";
// console.log(document.getElementsByClassName("slide1")[0].style);

// console.log(imgRandom.children[0].src);
window.onload = cambiarImg();

//clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

//init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//Show prev
function slideLeft() {
  reset();
  //   imageUrl();
  sliderImages[current - 1].style.display = "block";
  current--;
}

//show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
  //   console.log(current);
}

//left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

//right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

window.onload = startSlide();

// function imageUrl() {
//   fetch("https://source.unsplash.com/random")
//     .then(function(response) {
//       return response;

//       // Examine the text in the response
//     })
//     .then(function(data) {
//       console.log(data.url);
//       document.getElementsByClassName("slide")[
//         current
//       ].style.backgroundImage = `url('${data.url}')`;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

function cambiarImg() {
  setTimeout(() => {
    img = imgRandom.children[0];
    //console.log(img);
    fetch(url)
      .then(res => res)
      .then(data => {
        //   console.log(data.url);
        img.setAttribute("src", data.url);
      })
      .catch(err => console.log(err));
  }, 1000);
}
