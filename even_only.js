// create a function that will return only the even numbers/ return the sum of even numbers





// function evenNumbersOnly(numbers){
//     // console.log(numbers)
//     const even=[]
//     for(const number of numbers){
//         if(number%2===0){
//             // console.log(number);
//             even.push(number);
//         }
//     }
//     return even;
// }

// const num = [5,3,5,6,7];
// const evens=evenNumbersOnly(num);
// console.log(evens);



function sumofEven(numb){
    let even=0;
    for(const number of numb){
        if(number%2===0){
            // console.log(number);
            even+=number;
        }
    }
    return even;
}
const num = [5,3,5,6,7,8,16,18,20];
const sum = sumofEven(num);
console.log(sum);
