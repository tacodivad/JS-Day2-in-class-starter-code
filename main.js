/////// Variables Section ///////
const myName = "Divad Azuara"
const fruits = ['apples', 'bananas', 'blueberries', 'strawberries', 'pineapples'];
const car = [{make:"Toyota", model:"Tacoma", color:"Grey"},
             {make:"Chevy", model:"Bolt", color:"Blue"}, 
             {make:"Honda", model:"Civic", color:"White"}];
const today = new Date();
const loggedIn = true;



/////// PART 1 - Variables and Data Types demo///////
var a = 'Test1';
let b = 'Test2';

function testVar(){
  var a = 30;
  
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}

function testLet(){
  let a = 30;
 
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}

// console.log(a);
// console.log(b);
// console.log("Example using var");
// testVar();
// console.log("Example using LET");
// testLet();
// When you are done with this section you can comment out the console.logs above






//////// PART 2 - template literals////////
const result2Element = document.getElementById('result2');

////starter code////
//update code below to using template literals (not concatenation) to pull in the variables myName, color, make, into output
result2Element.innerHTML = `Hello my name is ${myName} and I drive a ${car[0].color} ${car[0].make} ${car[0].model}`;


//Footer Section
const footerElement = document.getElementById("footer");
const year = today.getFullYear();   // get the current year

//update code below to use template literals to pull in the myName and the current year
footerElement.innerHTML = `&copy; ${myName} ${year}`;





//////// PART 3 - Ternary Operator////////
////section 1 - basic if else statement
if (loggedIn) {
    const result3Element = document.getElementById('result3');
    result3Element.innerHTML = "Welcome back!";
} else {
    const result3Element = document.getElementById('result3');
    result3Element.innerHTML = "Please log in";
}

////Sample code.  You can uncomment this to see how simple a ternaly operator can be
 //loggedIn ? alert("welcome back") : alert("please log in");

////section 2 -ternary operator to update the result3Element 
const result3Element = document.getElementById('result3');
result3Element.innerHTML = loggedIn ? "Welcome back!" : "Please log in";


//////// PART 4 - Arrow Functions////////
function Greetings(name) {
    return `Hello ${name}!`;
};

console.log(Greetings("Divad"));

//Make a copy of the above function and rename it GreetingsArrow() and then convert function to an arrow function here
const GreetingsArrow = (name = "Guest") => `Hello ${name}!`;

console.log(GreetingsArrow("Divad"));   // Hello Divad!
console.log(GreetingsArrow());          // Hello Guest!




//////// PART 5 - Array methods////////
function printFruit() {

    let resultElement = document.getElementById("result5");

    resultElement.textContent = "";

fruits
      .filter(fruit => fruit.startsWith("b"))   //filter fruits with b. "bananas", "blueberries"
            .map(fruit => {
          // For each fruit that passed the filter, create a new <p> element
          let p = document.createElement("p");

          // Set the text of the <p> element to the current fruit's name
          p.textContent = fruit;

          // Append the <p> element to the result5 section in the HTML
          resultElement.appendChild(p);
      });
}

function clearText() {
    let resultElement = document.getElementById("result5");
    resultElement.textContent = "";
}

 //////// PART6 - Destructuring////////
//  myCar(car[0]);

//  function myCar(car) {
//      var make = car.make;
//      var model = car.model;
//      var color = car.color;
 
//      var message = `I drive a ${color} ${make} ${model}`;
   
//      document.getElementById("result6").textContent = message;
//  }

//convert the myCar function to use destructuring

// Call the function with the first car object
myCar(car[0]);

// Function rewritten using object destructuring
function myCar({ make, model, color }) {
    // Destructuring pulls make, model, and color directly from the car object
    const message = `I drive a ${color} ${make} ${model}`;
    
    // Display the message in the Part 6 section
    document.getElementById("result6").textContent = message;
}






//////// PART 7 - Spread Operator ////////

const baseProduct = {
    id: 'PROD-001',
    name: 'Wireless Headphones',
    price: 199.99,
    warranty: '1 year'
};
  
// Seasonal promotion overrides
const holidayPromo = {
    price: 149.99,
    promoText: 'Holiday Special!',
    bundle: 'Free carrying case'
};
  
// Merge baseProduct and holidayPromo using spread operator
// Add lastUpdated property with today's date
const todayDate = new Date().toISOString().split('T')[0]; // format: YYYY-MM-DD

const currentProduct = {
    ...baseProduct,
    ...holidayPromo,
    lastUpdated: todayDate
};
  
// Check the result object in the console
console.log(currentProduct);

// Output the required message with template literals
document.getElementById("result7").textContent = 
    `The ${currentProduct.name} are on sale for ${currentProduct.price} as of ${currentProduct.lastUpdated}`;




 //////// PART 8 - Try Catch ////////
function InputValidation() {
    const message = document.getElementById("part8-p");
    message.innerHTML = ""; // clear previous message
    
    let x = document.getElementById("part8-input").value;
    
    try { 
        // 1. Check if input is empty
        if (x === "") throw "Input is EMPTY";
        
        // 2. Check if input is not a number
        if (isNaN(x)) throw "Input is NOT A NUMBER";
        
        // Convert string to number for numeric checks
        x = Number(x);
        
        // 3. Check range
        if (x > 15) throw "Input is TOO HIGH";
        if (x < 10) throw "Input is TOO LOW";
        
        // 4. If all checks pass
        message.innerHTML = "Success";
    } 
    catch(err) {
        // Display error message thrown above
        message.innerHTML = err;
    } 
    finally {
        // Code here runs no matter what (good for debugging/logging)
        console.log("Validation attempted");
    }
}
