// ============================================================
// PART 3 — DOM Manipulation
//
// Instructions:
//   - Write all your JavaScript here
//   - Open index.html in Live Server to test
//   - Do not edit index.html
//   - Answer EXPLAIN prompts as comments directly below each one
// ============================================================


// ------------------------------------------------------------
// SECTION A — Selecting Elements
// ------------------------------------------------------------
console.log("[ SECTION A — Selecting Elements ]")

// A1.
// Use getElementById to select the following elements.
// Look at index.html to find each element's id.
// Store each in its own variable and log all of them.
//
//   the h1
//   the p that shows the page status
//   the unordered list

const h1 = document.getElementById('main-heading')
// make sure to think of good variable names
const pageStatus = document.getElementById('subtitle')
// what if you use the method but used a class name?
const itemList = document.getElementById('item-list')

// A2.
// Use querySelector to select the following elements.
// Store each in its own variable and log all of them.
//
//   the h2 — select it by its tag name
//   the "Toggle Highlight" button — select it by its id (look at index.html to find it)
//   a list item — select it by its class (look at index.html to find the class name)

// think css - what selectors can you use to style - that's how you can grab elements too
const h2 = document.querySelector('h2')

// what if i grabbed by tag instead?
const toggleBtn = document.querySelector('#toggle-btn')
const anItem = document.querySelector('.list-item') 
// A3.
// Use querySelectorAll to select all elements with the class "list-item".
// Store the result in a variable and log it.
const allItems = document.querySelectorAll('.list-item')
// demo defer!
console.log(allItems)

// A4.
// Use querySelectorAll to select all elements with the class "list-item".
// Loop over the result and log the text content of each one.
//
// Note: the result is a NodeList, not a plain array.

for (let i = 0; i < allItems.length; i++) {
  const item = allItems[i]
  console.log(item)
}

// A5.
// EXPLAIN: What is the difference between getElementById and querySelector?
//          What does querySelectorAll return? - NodeList
//          How is that different from a regular array? - Not the same data type
//
//          answer:
//          getElementById, getElementsByClassName, getElementsByTagName - grab element by  attribute string value 
//          querySelector - grab by css selectors - tags, ids, classes


// ------------------------------------------------------------
// SECTION B — Reading and Changing the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION B — Reading and Changing the DOM ]")

// B1.
// Select the h1 with the id "main-heading" and log its text content.
const mainH1 = document.getElementById('main-heading')
console.log(mainH1.textContent)

// B2.
// Select the p with the id "subtitle" and change its text to "Page loaded successfully."
// This should happen as soon as the page loads — not on a click.
const pTitle = document.getElementById('subtitle')
pTitle.textContent = 'Page Loaded successfully.'

// B3.
// Select the p with the id "output-text" and change its text to anything you choose.
const pText = document.getElementById('output-text')
pText.innerText = 'knicks in 5!'

// B4.
// Select the div with the id "output-box" and give it a background color of your choice.
// Do this with JavaScript — not by editing the CSS file.
const divBox = document.getElementById('output-box')
divBox.style.backgroundColor = 'blue'
divBox.style.color = 'orange'
divBox.style.fontSize = '24px'


// B5.
// EXPLAIN: What is textContent? - text of the element
//          How is it different from innerHTML? - text but also elements written wihtin the text
//          When would using innerHTML be risky? - when collecting user input!
//
//          answer:


// ------------------------------------------------------------
// SECTION C — Responding to Events
// ------------------------------------------------------------
console.log("\n[ SECTION C — Responding to Events ]")

// C1.
// Add a click listener to the button with the id "change-btn".
// When clicked, change the text of the h1 with the id "main-heading" to any text you choose.
const changeBtn = document.querySelector('#change-btn')

changeBtn.addEventListener('click', function(event) {
  // select & grab h1 if i don't have it already
  mainH1.textContent = 'It\'s a great day in NYC!'
})

// C2.
// Add a click listener to the button with the id "toggle-btn".
// When clicked, toggle the class "highlighted" on the p with the id "output-text".
// Add it if it is not there. Remove it if it is.
const tglBtn = document.querySelector('#toggle-btn')

tglBtn.addEventListener('click', function(event) {
  // select & grab p if i don't have it already
  pText.classList.toggle('highlighted')
})

// C3.
// Select the h1 with the id "main-heading" and add the class "active" to it.
// Log the element's class list to confirm the class is there.
//
// Then select one of the list items that already has the class "list-item".
// Remove that class from it.
// Log its class list to confirm the class is gone.
h1.classList.add('active')
console.log(h1)

anItem.classList.remove('list-item')
console.log(anItem)

// C4.
// EXPLAIN: What is an event listener? - a function/even that will run at a later time
//          Why can't you write the code outside of a function
//          and expect it to run when the button is clicked? - JS will run the file once! 
//              and run listeners based on events fired at a later time - when user interacts with the elements on the page
//
//          answer:


// C5.
// EXPLAIN: What does classList.toggle do? - add/removes based on whether the class is alreay there or not
//          What does classList.add do? What does classList.remove do? - it does as the name suggests
//          How are they different from setting element.className directly? - it's apply a class & not mutating the styles from the object itself
//
//          answer:


// ------------------------------------------------------------
// SECTION D — Creating and Adding to the DOM
// ------------------------------------------------------------
console.log("\n[ SECTION D — Creating and Adding to the DOM ]")

// D1.
// Create a new li element.
// Set its text content to any item you choose.
// Give it the class "list-item".
// Append it to the ul with the id "item-list".

const newLiTag = document.createElement('li')
newLiTag.textContent = 'i am a new item'
newLiTag.classList.add('list-item')
// check the page? what happened?
itemList.append(newLiTag)

// D2.
// Add a click listener to the button with the id "add-btn".
// When clicked:
//   - Read the current value from the input with the id "item-input"
//   - Create a new li element and set its text to that value
//   - Give it the class "list-item"
//   - Append it to the ul with the id "item-list"
//   - Clear the input field after
const addBtn = document.querySelector('#add-btn')
const input = document.querySelector('input') // or grab by id - but there's only one in the html

addBtn.addEventListener('click', function (event) {
  const userInput = input.value

  if (userInput.length < 2) {
    return 
    // the function will stop running
    // and we don't capture the return value - so we don't need to return an actual value
  }

  // why are we writing this inside here again?
  // can i use the same variable name here?
  const newLiTag = document.createElement('li')
  
  newLiTag.textContent = userInput
  
  newLiTag.classList.add('list-item')
  itemList.append(newLiTag)

  input.value = ''
})


// D3.
// Select the p with the id "output-text" and remove it from the page entirely.
// After this runs, the element should no longer be visible.
const outpText = document.querySelector('#output-text')
outpText.remove()

// D4.
// EXPLAIN: What does createElement do? - creates an DOM element object in JS
//          What does appendChild do? What does remove() do? - adds the child element to the parent calling the method
//          When does the newly created element actually appear on the page? - when you append it to the DOM
//
//          answer:

