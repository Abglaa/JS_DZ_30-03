const input = document.getElementById('input')
const plusButton = document.getElementById('incrementButton')
const minusButton = document.getElementById('decrementButton')

plusButton.addEventListener("click", () => {
    const currentValue = parseInt(input.value)
    input.value = currentValue +1
})
minusButton.addEventListener("click", () => {
    const currentValue = parseInt(input.value)
    input.value = currentValue -1
})

