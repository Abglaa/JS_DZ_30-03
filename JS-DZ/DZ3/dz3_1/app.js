const array = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]
const newArray = []
for(const num of array){
    const numStr = num.toString()
    if(numStr.startsWith('2') || numStr.startsWith('5')){
        newArray.push(num)
    }
}
console.log(newArray)





