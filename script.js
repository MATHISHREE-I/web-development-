const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Clear the display
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Calculate result
equalBtn.addEventListener("click", () => {
  try {
    // Evaluate the string expression
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
  }
});