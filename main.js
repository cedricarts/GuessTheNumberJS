// ✅ Get references to HTML elements
const submitBtn = document.getElementById("submit-btn");  // The "Guess" button
const userInput = document.getElementById("user-input");  // The input where user enters their number
const outResult = document.getElementById("output");      // The element where results will be displayed
const restartBtn = document.getElementById("restart");     // The "Restart" button


restartBtn.onclick = RestartGame;

//Generate the initial random number when the page loads
let randomNumber = RandomNumber();

//Attach the GuessRandomNumber function to the button click
submitBtn.onclick = GuessRandomNumber;

/**
 * RandomNumber()
 * Generates a random integer between 0 and 10 (inclusive)
 * Math.random() gives [0,1), multiplying by 11 gives [0,11),
 * and Math.floor converts it to an integer in [0,10].
 */
function RandomNumber(){
   let computerNumber = Math.floor(Math.random() * 11);
   return computerNumber;
}

/**
 * GuessRandomNumber()
 * Triggered when the user clicks the "Guess" button.
 * It reads the user's guess, compares it with the random number,
 * and displays appropriate feedback.
 */
function GuessRandomNumber(){
    // Clear previous result before showing new feedback
    outResult.innerText = "";

    // Convert the user's input value to a number
    let userGuess = Number(userInput.value);

    // Call RandomNumber() here, but note: this currently doesn't update randomNumber
    randomNumber;

    // This variable will store the feedback message
    let result;

    // Case 1: User guessed the number correctly
    if(userGuess == randomNumber){
        result = `Yay, You guessed the number!! The number is ${userGuess}`;
        // Generate a new random number, but again not storing it — intentional as per your structure
        randomNumber = RandomNumber();
    }
    //Case 2: User's guess is too high
    else if(userGuess > randomNumber){
        result = `The number is too high!`;
    }
    //Case 3: User's guess is too low
    else{
        result = `The number is too low!`;
    }

    // Display the feedback to the user
    outResult.innerText = result;
}

function RestartGame(){
    outResult.innerText = "";
    randomNumber = RandomNumber();
    randomNumber;
    location.reload();
}
