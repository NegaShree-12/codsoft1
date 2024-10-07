const buttons = document.querySelectorAll('input[type="button"]');

const display = document.querySelector('input[name="dispaly"]');

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'AC') {
            currentInput = "";
        } else if (value === 'DE') {
            currentInput = currentInput.slice(0, -1);
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput);
            } catch (e) {
                currentInput = "Error";
            }
        } else {
            currentInput += value;
        }

        display.value = currentInput;
    });
});
