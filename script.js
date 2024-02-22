function getRandomNeonColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const newColor = getRandomNeonColor();
    document.body.style.backgroundColor = newColor;
}

setInterval(changeBackgroundColor, 3000);

let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'M+') {
            // Add the current result to memory
            try {
                const result = eval(string);
                memory += result;
            } catch (error) {
                document.querySelector('input').value = 'Error';
                return;
            }
        } else if (e.target.innerHTML == 'M-') {
            // Subtract the current result from memory
            try {
                const result = eval(string);
                memory -= result;
            } catch (error) {
                document.querySelector('input').value = 'Error';
                return;
            }
        } else if (e.target.innerHTML == 'MC') {
            // Clear the memory
            memory = 0;
        } else if (e.target.innerHTML == '%') {
            // Calculate percentage
            try {
                const result = eval(string);
                string = (result / 100).toString();
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = 'Error';
                return;
            }
        } else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})