# Background-Color-Changer
I'm  Creating the background color changer using HTML, CSS and JavaScript. we add a some different button with different color name. when we click button then change the color  
![Screenshot 2024-08-31 012140](https://github.com/user-attachments/assets/307b531e-ce3d-4136-969b-9ecef0e0d90e)
-----------------------------------------------------------------------------------------------------------------------
# This JavaScript code changes the background color of the webpage based on which button the user clicks.
## Breakdown of the Code:
1. Element Selection:

``` javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');
```
* `buttons` selects all elements with the class .button and stores them in a NodeList (like an array of elements).
* `body` selects the <body> element of the document.
2. Loop Through Buttons:

``` javascript
buttons.forEach(function (button) {
  console.log(button);
```
* This loop iterates over each element in the buttons NodeList.
`console.log(button);` logs each button to the console.
3. Event Listener for Click Events:

``` javascript
button.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.target);
```
* An event listener is added to each button to listen for a `"click"` event.
* When a button is clicked, it triggers a function that:
* Logs the event object e to the console (`console.log(e);`).
* Logs the specific element that was clicked (`console.log(e.target);`).
4. Change Background Color Based on Button ID:

``` javascript
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
```
## simplified code
```
const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const color = e.target.id;
    if (color === "reset") {
      body.style.backgroundColor = "";
    } else {
      body.style.backgroundColor = color;
    }
  });
});
```

* This part checks the `id` of the button that was clicked.
* If the `id` matches any of the specified colors (`red`,` blue`, `black`, `green`, `yellow`, `cyan`), the background color of the `body` is changed to that color.
* If the reset button is clicked (id="reset"), the background color is reset to its default (empty string).
