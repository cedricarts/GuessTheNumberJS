// Get references to the important DOM elements
const SubmitBtn = document.getElementById("submit-btn");
const userInput = document.getElementById("user-input");
const outResult = document.getElementById("output");

// Generate the first random number between 0 and 10 when the page loads
let randomNumber = generateRandomNumber();

// Attach the guessing function to the button click
SubmitBtn.onclick = guessNumber;

/**
 * Generates and returns a random integer between 0 and 10 (inclusive)
 * Math.random() gives [0, 1), so multiplying by 11 gives 0–10.999...
 * Math.floor() then trims it to an integer between 0 and 10.
 */
function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
}

/**
 * Handles the core game logic:
 * - Reads user input
 * - Compares it to the secret number
 * - Displays feedback
 * - Generates a new number on a correct guess
 */
function guessNumber() {
    // Clear any previous result message to avoid stacking feedback
    outResult.innerText = "";

    // Convert user input to a number for proper comparison
    const userGuess = Number(userInput.value);
    let result;

    // Check if the input is a valid number
    if (isNaN(userGuess)) {
        result = "Please enter a valid number.";
    } 
    // Case 1: User guessed correctly
    else if (userGuess === randomNumber) {
        result = `Yay, you guessed the number!! The number was ${randomNumber}.`;
        // Generate a new random number so the game continues with a new target
        randomNumber = generateRandomNumber();
    } 
    // Case 2: Guess is too high
    else if (userGuess > randomNumber) {
        result = "The number is too high!";
    } 
    // Case 3: Guess is too low
    else {
        result = "The number is too low!";
    }

    // Show the feedback in the output area
    outResult.innerText = result;
}
