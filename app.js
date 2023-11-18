const colours = ['red', 'orange', 'green', 'blue', 'purple', 'aqua', 'yellow', 'yellowgreen', 'gray', 'pink', 'bisque'];
const container = document.querySelector('.container');
const body = document.querySelector('body');

function changeColor(index) {
    console.log('Color changed:', colours[index]);
    body.style.backgroundColor = colours[index];
}

colours.forEach((colour, index) => {
    const button = document.createElement('button');
    button.textContent = colour;
    button.style.backgroundColor = colour;
    button.addEventListener('click', () => changeColor(index));
    container.appendChild(button);
});