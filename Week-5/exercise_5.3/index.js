
const { log } = require('console')


const hasDuplicate = (arr) => {
    if(arr.length !== new Set(arr).size){
        return `Has duplicate values.` 
    }
    return `Does not have duplicate values.`
}

const arr1 = [1,2,3,3,2,1,4,5,6]
const arr2 = [4,5,6]

log(hasDuplicate(arr1)) // Has duplicate values.

log(hasDuplicate(arr2)) // Does not have duplicate values.


