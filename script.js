//anything that has a class of button, once clicked will console long the text of the button
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.value);
    });
    });