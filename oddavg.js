
// function takes an arr as parameter
// give me the average of the odd num in the arr

function oddAvg(num){
    let totalnum=0;
    // let count = 0;
    let odds = [];
    // console.log(num)
    for(const number of num){
        if(number %2===1){
            totalnum+=number;
            // count++;
            odds.push(number);
        }
    }
    console.log(odds);
    return totalnum/odds.length;
}

const number = [42,13,58,65,81];
const avg = oddAvg(number);
console.log(avg)