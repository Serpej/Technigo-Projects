/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
    console.log(
      `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
    );
  };
  theCoders("jennie", "tom");
  /*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */
  
  theCoders("Jesper");

  /*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */
  
  const comapareCoders = (driver, navigator) => {
    let driverLength =  driver.length;
    let navigatorLength = navigator.length;

    if (driverLength > navigatorLength) {
      console.log("The driver has the longest name.");
    } else if (driverLength < navigatorLength) {
      console.log("The navigator has the longest name");
    } else {
      console.log("The driver and the navigator has equally long names");
    }
  }

  comapareCoders("Jennie", "Adam");

  /*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */

  //let userAge = prompt("How old are you?");
  const checkAge = (userAge) => {
    if (userAge > 27) {
      console.log("You survived alot of famous dead people!");
    } else if (userAge > 50) {
      console.log("You're beyond the middle wiii!");
    } else if (userAge > 80) { 
      console.log("Count youself lucky!");
    } else if (userAge < 10 && userAge > 0) {
      console.log("You've got so much ahead of you!");
    } 
  }

  //checkAge(userAge);

  const calculationTest = () => {

    let randomNumber1 = Math.floor((Math.random() * 10) + 1);
    let randomNumber2 = Math.floor((Math.random() * 10) + 1);
    let answer = randomNumber2 + randomNumber1;
    let userAnswer = prompt(`What is ${randomNumber1} + ${randomNumber2 }?`);

      let chosenNumber = parseInt(userAnswer);

    if (chosenNumber === answer) {
      console.log("Yay! Correct!");
    } else {
      console.log(`Noooo, the answer is ${answer}.`);
    }
  };

  calculationTest();
  
  /*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */


  