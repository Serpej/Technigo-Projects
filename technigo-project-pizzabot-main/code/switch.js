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

const foodMenu = prompt(
  `What kind of food would you like to order?
  Enter a number:
  1 - Pizza
  2 - Pasta
  3 - Salad`
);

let foodChoice = "";

if(foodMenu === `1`) {
  alert (`You chose pizza.`);
  foodChoice = `Pizza`;
} else if (foodMenu === `2`) {
  alert(`You chose pasta.`);
  foodChoice = `Pasta`;
} else if (foodMenu === `3`) {
  alert (`You chose salad`);
  foodChoice = `Salad`;
} else {
  alert(`Invalid input, you have to choose a number between 1 and 3`);
  throw new Error("Terminating script due to invalid input.");
}

// Step 3 - Subtype choice

let subTypeChoice = "";

 if(foodChoice === `Pizza`) {
    subTypeMenu = prompt(
      `What pizza would you like to order.
      Enter a number:
      1 - Hawaiian
      2 - Quattro Straggione
      3 - Vegetale`
    );
    if (subTypeMenu === `1`) {
      subTypeChoice = `Hawaiian`;
      alert(`You chose ${subTypeChoice}`);
    } else if (subTypeMenu === `2`) {
      subTypeChoice = `Quattro Straggione`;
      alert(`You chose ${subTypeChoice}`);
    } else if (subTypeMenu === `3`) {
      subTypeChoice = `Vegetale`;
      alert(`You chose ${subTypeChoice}`);
    }
 } else if(foodChoice === `Pasta`) {
    subTypeMenu = prompt(
      `What pizza would you like to order.
      Enter a number:
      1 - Bolognese
      2 - Carabonara
      3 - Pasta Pesto`
    );
    if (subTypeMenu === `1`) {
      subTypeChoice = `Bolognese`;
      alert(`You chose ${subTypeChoice}`);
    } else if (subTypeMenu === `2`) {
      subTypeChoice = `Carabonara`;
      alert(`You chose ${subTypeChoice}`);
    } else if (subTypeMenu === `3`) {
      subTypeChoice = `Pasta Pesto`;
      alert(`You chose ${subTypeChoice}`);
    }
 } else if(foodChoice === `Salad`) {
    subTypeMenu = prompt(
      `What pizza would you like to order.
      Enter a number:
      1 - Greek Style
      2 - Asian Style
      3 - Pasta Salad`
    );
    if (subTypeMenu === `1`) {
      subTypeChoice = `Greek Style`;
      alert(`You chose ${subTypeChoice}`);
    } else if (subTypeMenu === `2`) {
      subTypeChoice = `Asian Style`;
      alert(`You chose ${subTypeChoice}`);
    } else if (subTypeMenu === `3`) {
      subTypeChoice = `Pasta Salad`;
      alert(`You chose ${subTypeChoice}`);
    }
 } else {
    alert(`Invalid input, you have to choose a number between 1 and 3`);
    throw new Error("Terminating script due to invalid input.");
 }

// Step 4 - Age

const ageMenu = prompt(
  `Is the meal for an adult or a child
  Enter your age:`
);

let confirmOrder = "";

let ageAsNumber = parseInt(ageMenu);

if (ageAsNumber > 15) {
  confirmOrder = prompt (
    `${customerName}, you have ordered a ${subTypeChoice} for the cost of 20€. You you confirm this order?
    
    Enter a number:
    1 - Yes
    2 - No`
  );
  if (confirmOrder === `2`) {
    alert (`Alright, cancelling order`);
    throw new Error("Terminating script due to cancellation.");
  };
} else if (ageAsNumber <= 15 && ageAsNumber > 0) {
  confirmOrder = prompt (
    `${customerName}, you have ordered a ${subTypeChoice} for the cost of 15€. You you confirm this order?
    
    Enter a number:
    1 - Yes
    2 - No`
  );

  if (confirmOrder === `2`) {
    alert (`Alright, cancelling order`);
    throw new Error("Terminating script due to cancellation.");
  };

} else {
  alert (`Well that's an invalid age`);
  throw new Error("Terminating script due to invalid input.");
}


// Step 5 - Order confirmation

alert(
  `Thank you for your order. Your food will be delivered to in but a moments notice, Enjoy!`
);



