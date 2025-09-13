// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
const customerName  = prompt(`What's your name?`);
alert(
  `Welcome ${customerName} to Javascript Pizzeria!`
);

// Step 2 - Food choice
const foodChoice = prompt(
  `What kind of food would you like to order?
  Enter a number:
  1 - Pizza
  2 - Pasta
  3 - Salad`
);


if(foodChoice === `1`) {
  alert (`1`);

} else if (foodChoice === `2`) {
  alert(`2`);

} else if (foodChoice === `3`) {
  alert (`3`);

} else {
  alert(`Invalid input, you have to choose a number between 1 and 3`);
}


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
