//  array has some duplicate elements.

function noDup(arr){
    // console.log(arr)
    const unq = [];
    for(const item of arr){
        if(unq.includes(item)===false){
            unq.push(item);
        }
    }

    return unq;
}

const biriyaniKhor =['abul', 'babul', 'cabul', 'abul','babul', 'dabul','kabul','cabul'];
const unqArr = noDup(biriyaniKhor);
console.log(unqArr);