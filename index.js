let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let resetBtn = document.querySelector(".reset");
let togglePlusMinusBtn = document.querySelector(".toggle-plus-minus");
let percentOperatorBtn = document.querySelector(".percent-operator");
let screenText = "";
let num1 = "";
let num2 = "";
let result = 0;
let operation = "";
let screenContent;


//pour ecrire des chiffre les un apres les autres
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (!operation) {
        num1 += e.target.textContent;
        screen.textContent = num1;
        screenNum = num1;
      } else {
        num2 += e.target.textContent;
        screen.textContent = num2;
        screenNum = num2;
      }
    });
  });

//Logic for addition, subtraction, division, and multiplication

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (operation && num2) {
      switch (operation) {
        case "+":
          result = result
            ? result + Number(num1) + Number(num2)
            : Number(num1) + Number(num2);
          num1 = "";
          num2 = "";
          screen.textContent = result;
          break;

        case "-":
          result = result ? result - Number(num2) : Number(num1) - Number(num2);
          num1 = "";
          num2 = "";
          screen.textContent = result;
          break;

        case "X":
          result = result ? result * Number(num2) : Number(num1) * Number(num2);
          num1 = "";
          num2 = "";
          screen.textContent = result;
          break;

          case "÷":
            if (Number(num2) === 0) {
              screen.textContent = "syntax error";
            } else {
              result = result ? result / Number(num2) : Number(num1) / Number(num2);
              num1 = "";
              num2 = "";
              screen.textContent = result;
            }
          break;

        case "=":
          if (operation === "+") {
            result = result
              ? result + Number(num2)
              : Number(num1) + Number(num2);
          } else if (operation === "-") {
            result = result
              ? result - Number(num2)
              : Number(num1) - Number(num2);
          } else if (operation === "÷") {
            result = result
              ? result / Number(num2)
              : Number(num1) / Number(num2);
          } else if ((operation = "X")) {
            result = result
              ? result * Number(num2)
              : Number(num1) * Number(num2);
          }
          num1 = "";
          num2 = "";
          screen.textContent = result;
          break;
      }
    }
    operation = e.target.textContent;
  });
});

//Change value from positive to negative and vice-versa
togglePlusMinusBtn.addEventListener("click", (e) => {
  if (num1 && !num2 && !result) {
    num1 = num1 < 0 ? Math.abs(num1) : -Math.abs(num1);
    screen.textContent = num1;
  } else if (num2 && num1 && !result) {
    num2 = num2 < 0 ? Math.abs(num2) : -Math.abs(num2);
    screen.textContent = num2;
  } else if (result && !num1 && !num2) {
    result = result < 0 ? Math.abs(result) : -Math.abs(result);
    screen.textContent = result;
  } else if (num2 && result) {
    num2 = num2 < 0 ? Math.abs(num2) : -Math.abs(num2);
    screen.textContent = num2;
  }
});

//Divide number in screen by 100 when clicked...
percentOperatorBtn.addEventListener("click", (e) => {
  if (num1 && !num2 && !result) {
    num1 = Number(num1) / 100;
    screen.textContent = num1;
  } else if (num2 && num1 && !result) {
    num2 = Number(num2) / 100;
    screen.textContent = num2;
  } else if (result && !num1 && !num2) {
    result = Number(result) / 100;
    screen.textContent = result;
  } else if (num2 && result) {
    num1 = Number(num1) / 100;
    screen.textContent = num2;
  }
});

//Reset button logic...
resetBtn.addEventListener("click", (e) => {
  num1 = "";
  num2 = "";
  screenText = "";
  operation = "";
  result = 0;
  screen.textContent = 0;
});


// Music by Coma-Media from Pixabay