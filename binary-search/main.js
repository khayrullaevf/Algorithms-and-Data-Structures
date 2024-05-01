

function binary_search(array,item){
let high=array.length-1;
let low=0

while (low<=high) {
    let mid = Math.floor((high + low) / 2);
    if (item==array[mid]){
        return mid
    }
    if (array[mid]>item) {
        high=array[mid]-1
    }else{
        low=array[mid]+1
    }
}
return null
}

console.log(binary_search([1,2,3,4,5,6,7,8,9,10],3));