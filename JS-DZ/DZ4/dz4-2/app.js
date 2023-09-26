const button = document.getElementById('operation')

const operation = (array, operationFunc) =>{
        const result = array.map(operationFunc)
        return result
}

button.addEventListener("click", () => {
    const array = [1,2,3,4,5]
    const operResult = operation(array, (e) => e+9)
    alert(`Результат${operResult}`)
})