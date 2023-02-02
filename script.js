//anything that has a class of button, once clicked will console long the text of the button
//var to store user input
let input = '';
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        //take user input and store it in a variable
        input += e.target.value;
        console.log('input: ', input);
           //display ongoing input from user
    document.querySelector('#working-calc').innerHTML = input;

        //parse input to get numbers and operators
        const parts = input.split(/\+|\-|\*|\//);
    const num1 = parseFloat(parts[0]);
    const num2 = parseFloat(parts[1]);
    const operator = input.match(/\+|\-|\*|\//)[0];

    console.log('num1: ', num1);
    console.log('num2: ', num2);
    console.log('operator: ', operator);
    
    //perform operation
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;

    }
 
    //display result onto screen
    //only display result if there is a result AND when the user clicks the equals button
  
    if (result && e.target.value === '=' ) {
        document.querySelector('#result').innerHTML = result;
    }
   //clear input and result when user clicks clear button
    if (e.target.value === 'clear') {
        input = '';
        document.querySelector('#working-calc').innerHTML = '';
        document.querySelector('#result').innerHTML = '';
    }

    

    });
    });

    //functions for each operation

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

