// we can use the variables in vendor.js because vendor.js is loaded before app.js in the html
/* can comment using // 
or alt-shift-a */
const defaultResult = 0;
let currentResult = defaultResult; //assign by value
let logEntries = [];

//get user input
function getUserNumberInput() {
  return parseInt(userInput.value); //vendor.js variable
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //string interpolation
  outputResult(currentResult, calcDescription);
}

//create a logEntry object everytime fn is called and push to log-array
function createLogEntry(operator, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operator,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  createLogEntry(calculationType, initialResult, enteredNumber, currentResult);
}

// function resetNumber() {
//   userInput.value = "0";
// }

// function add() {
//   calculateResult("ADD");
// }

// function subtract() {
//   calculateResult("SUBTRACT");
// }

// function divide() {
//   calculateResult("DIVIDE");
// }

// function multiply() {
//   calculateResult("MULTIPLY");
// }

addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "DIVIDE"));
divideBtn.addEventListener("click", calculateResult.bind(this, "MULTIPLY"));
