const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "cyan") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "reset") {
      body.style.backgroundColor = "";
    }
  });
});

// Simplify code


// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector('body');

// buttons.forEach(button => {
//   button.addEventListener("click", (e) => {
//     const color = e.target.id;
//     if (color === "reset") {
//       body.style.backgroundColor = "";
//     } else {
//       body.style.backgroundColor = color;
//     }
//   });
// });

