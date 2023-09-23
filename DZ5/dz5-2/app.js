const mixedArray = ['frontend', 3, 34, 45, null, undefined, null, 45, 'text', 'text', true, false, 23, null, 'qwerty', '456'];
const groupedArrays = {};
for (const item of mixedArray) {
    const type = typeof item;
    if (!groupedArrays[type]) {
        groupedArrays[type] = [];
    }
    groupedArrays[type].push(item);
}
const groupedArraysArray = Object.values(groupedArrays);
groupedArraysArray.sort((a, b) => b.length - a.length);
const filteredArrays = groupedArraysArray.filter(arr =>  {
    if (typeof arr[0] === 'string') {
        return arr.some(item => typeof item === 'string' && item.length > 3);
    }
    return true;
});
console.log(filteredArrays);