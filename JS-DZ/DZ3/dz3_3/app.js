const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
const tagsObj = {}
for (const tag of tags){
    if(tagsObj[tag]){
        tagsObj[tag]+=1
    }else{
         tagsObj[tag]=1
    }
}
console.log(tagsObj)