/**
 * Simple Web Navigator Simulation:
 *
 * This script emulates basic web navigation using two stacks.
 * The user can navigate to new URLs, move back and forth in their
 * history, and quit the simulation.
 *
 * The backPages stack keeps track of the previous pages.
 * The nextPages stack remembers the pages visited after moving back.
 * Navigation decisions are made based on user input and the current
 * contents of these stacks.
 */
const Stack = require("./Stack.js");
const prompt = require("prompt-sync")();

// ------------------------------
// Initialization
// ------------------------------

// Setting up a stack to keep track of the previous pages.
const backPages = new Stack();

// Setting up another stack to remember pages after going back.
const nextPages = new Stack();

// Starting with a default page.
let currentPage = "Start Page";

// ------------------------------
// Helper Functions
// ------------------------------

// This function displays the current status of navigation.
function showCurrentPage(action) {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log("Back page = ", backPages.peek());
  console.log("Next page = ", nextPages.peek());
}

// Navigating to a completely new page.
function newPage(page) {
  backPages.push(currentPage);  
  currentPage = page;           
  while (!nextPages.isEmpty()) {
    nextPages.pop();            
  }
  showCurrentPage("New:");
}

// Navigating back to a previous page.
function backPage() {
  nextPages.push(currentPage);  
  currentPage = backPages.pop(); 
  showCurrentPage("Back: ");
}

// Moving forward in browsing history after having gone back.
function nextPage() {
  backPages.push(currentPage);  
  currentPage = nextPages.pop();
  showCurrentPage("Next: ");
}

// Prompt messages for user interaction.
const baseInfo = "\nEnter a url";
const backInfo = "B|b for back page";
const nextInfo = "N|n for next page";
const quitInfo = "Q|q for quit";
const question = "Where would you like to go today? ";

// Displaying the starting status.
showCurrentPage("Default");

// Navigation will continue until this variable is set to true.
let finish = false;  
// Variables to determine if "back" and "next" options should be available.
let showBack = false; 
let showNext = false; 

// Main loop for browser navigation.
while (!finish) {  
  let instructions = baseInfo;
  
  // If there's a page in backPages, the back option is available.
  if (backPages.peek() !== null) {  
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }

  // Similarly for nextPages.
  if (nextPages.peek() !== null) {  
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }
  
  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions); 

  // User input is collected here.
  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();
  
  // Decision-making based on user input.
  if (lowerCaseAnswer === "n") {
    if (showNext) {
      nextPage();
    } else {
      console.log("Cannot go to the next page. Stack is empty.");
    }
  } else if (lowerCaseAnswer === "b") {
    if (showBack) {
      backPage();
    } else {
      console.log("Cannot go back a page. Stack is empty.");
    }
  } else if (lowerCaseAnswer === "q") {
    finish = true;  
  } else {
    newPage(answer);  
  }
}
