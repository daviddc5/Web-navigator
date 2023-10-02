const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack()
const nextPages = new Stack()
let currentPage = 'Start Page';
// ------------------------------
// Helper Functions
// ------------------------------
showCurrentPage(action){
  console.log('Action taken: '+ action);
  console.log('Current Page '+ currentPage);
  console.log('Top element of backPages stack: '+ backPages.peek());
  console.log('Top element of nextPages stack: '+ nextPages.peek());
}
newPage(page){
  backPages.push(curentPage)
  currentPage = page
  while(!nextPages.isEmpty()){
    nextPages.pop()
  }
  showCurrentPage("New:")
}
backPage(){
  nextPages.push(currentPage)
  currentPage = backPages.pop()
  showCurrentPage("Back: ")

}
nextPage(){
 backPages.push(currentPage)
 currentPage = nextpages.pop()
 shorCurrentPage("Next: ")

}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------

  // ------------------------------
  // User Interface Part 2
  // ------------------------------
