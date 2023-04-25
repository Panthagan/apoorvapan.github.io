/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// Initialize variables
let costPerDay = 50;
let numberOfDays = 1;
let elementToModify = document.getElementById("element-id");
function updateCostPerDay(newCost) {
  costPerDay = newCost;
  elementToModify.innerHTML = "Cost per day: " + costPerDay;
}
function updateNumberOfDays(newNumberOfDays) {
  numberOfDays = newNumberOfDays;
  elementToModify.innerHTML = "Number of days selected: " + numberOfDays;
}
function resetVariables() {
  costPerDay = 50;
  numberOfDays = 1;
  elementToModify.innerHTML = "Cost per day: " + costPerDay + "<br>Number of days selected: " + numberOfDays;
}



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
// Get all day buttons and clear days button
const dayButtons = document.querySelectorAll('.day-button');
const clearDaysButton = document.querySelector('#clear-days-button');

let selectedDays = [];
let dayCounter = 0;
const dayPrice = 10;

function updateTotalCost() {
  const totalCost = dayCounter * dayPrice;
  const totalCostElement = document.querySelector('#total-cost');
  totalCostElement.textContent = `$${totalCost}`;
}

dayButtons.forEach(dayButton => {
  dayButton.addEventListener('click', () => {
    if (dayButton.classList.contains('clicked')) {
      return;
    }
    dayButton.classList.add('clicked');
    selectedDays.push(dayButton.textContent);
    dayCounter++;
    updateTotalCost();
  });
});

clearDaysButton.addEventListener('click', () => {
  dayButtons.forEach(dayButton => {
    if (dayButton.classList.contains('clicked')) {
      dayButton.classList.remove('clicked');
    }
  });
  selectedDays = [];
  dayCounter = 0;
  updateTotalCost();
});





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
  const daySelectors = document.querySelectorAll(".day-selector");
  daySelectors.forEach(daySelector => {
    daySelector.classList.remove("clicked");
  });
  
  
  const costElement = document.getElementById("cost");
  costElement.innerText = "0";
});






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const dailyRate = document.getElementById("daily-rate");
const totalCost = document.getElementById("total-cost");

halfButton.addEventListener("click", function() {
  dailyRate.innerHTML = "$20";
  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");
  calculateTotalCost();
});
function calculateTotalCost() {
  const rate = parseFloat(dailyRate.innerHTML.slice(1));
  const duration = parseInt(document.getElementById("duration").value);
  const cost = rate * duration;
  totalCost.innerHTML = "$" + cost.toFixed(2);
}
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const priceInput = document.getElementById('price-input');
const calculateButton = document.getElementById('calculate-button');
const calculatedCost = document.getElementById('calculated-cost');

calculateButton.addEventListener('click', function() {
  const width = parseFloat(widthInput.value);
  const height = parseFloat(heightInput.value);
  const price = parseFloat(priceInput.value);

  const totalCost = width * height * price;

  calculatedCost.innerHTML = '$' + totalCost.toFixed(2);
});
chat

