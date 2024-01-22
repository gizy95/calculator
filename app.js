let number1 = 0;
let number2 = 0;
let operator = "";
let solution = 0;
const buttons = document.querySelector(".buttons")
const display1 = document.querySelector(".display .one")

const display2 = document.querySelector(".display .two")



const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

const operate = (operator, a, b) => {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}


buttons.addEventListener("click", (e) => {
    const clickedButton = e.target.closest("button");

    if (clickedButton) {
        const buttonText = clickedButton.innerText;

        if (!isNaN(buttonText)) {
            // It's a number
            if (operator === "") {
                // If no operator is selected, update number1
                number1 = parseFloat(`${buttonText}`);
                display1.innerText = number1;
            } else {
                // If an operator is selected, update number2
                number2 = parseFloat(`${buttonText}`);
                display1.innerText += " " + number2;
            }
        } else if (buttonText === "=") {
            // It's the equals button, perform the operation
            if (operator !== "" && number2 !== "") {
                solution = operate(operator, number1, number2);
                display1.innerText = `${number1} ${operator} ${number2}`;
                display2.innerText = solution.toFixed(3);
                // Reset values for the next operation
                number1 = solution;
                number2 = 0;
                operator = "";
            }
        } else if (buttonText === "C") {
            // It's the clear button, reset all values
            number1 = 0;
            number2 = 0;
            operator = "";
            solution = 0;
            display1.innerText = "";
            display2.innerText = "0";
        } else {
            // It's an operator (+, -, *, /)
            operator = buttonText;
            display1.innerText = `${number1} ${operator}`;
        }
    }
});