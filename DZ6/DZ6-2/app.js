let num1Input = document.getElementById('num1');
        let num2Input = document.getElementById('num2');
        let addButton = document.getElementById('add');
        let subtractButton = document.getElementById('subtract');
        let multiplyButton = document.getElementById('multiply');
        let divideButton = document.getElementById('divide');
        let calculateButton = document.getElementById('calculate');
        let result = document.getElementById('result');

        addButton.addEventListener('click', () => performOperation('+'));
        subtractButton.addEventListener('click', () => performOperation('-'));
        multiplyButton.addEventListener('click', () => performOperation('*'));
        divideButton.addEventListener('click', () => performOperation('/'));
        calculateButton.addEventListener('click', () => performCalculate());

        function performOperation(operator) {
            let num1 = parseFloat(num1Input.value);
            let num2 = parseFloat(num2Input.value);

            if (isNaN(num1) || isNaN(num2)) {
                result.textContent = 'Ошибка: Введите числа';
                result.style.color = 'red';
            } else {
                result.style.color = 'black'; // Сбрасываем цвет текста
                switch (operator) {
                    case '+':
                        result.textContent = num1 + num2;
                        break;
                    case '-':
                        result.textContent = num1 - num2;
                        break;
                    case '*':
                        result.textContent = num1 * num2;
                        break;
                    case '/':
                        if (num2 === 0) {
                            result.textContent = 'Ошибка: Деление на ноль';
                            result.style.color = 'red';
                        } else {
                            result.textContent = num1 / num2;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
