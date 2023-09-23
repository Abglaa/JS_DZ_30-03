        const button = document.getElementById('btn');
        const output = document.getElementById('text');

        button.addEventListener('click', function () {
            const userInput = prompt('Введите текст:');
            if (userInput !== null && userInput !== "") {
                output.textContent = userInput;
            } else {
                alert('Ошибка: Ничего не введено.');
            }
        });