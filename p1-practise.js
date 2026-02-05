// function celToFr(num){
//     const fahrenhite = num*(9/5)+32;
//     return fahrenhite;
// }

// const celsius = celToFr(30);
// console.log(celsius);

// function repeat(arr,src){
//     console.log(arr);
//     console.log(src);

//     let count=0;

//     for(const char of arr){
//         if(arr.includes(char)===src.includes(char)){
//         count++;
//         }
//     }
    
//     return count;
// }

// const numArr = [5,6,11,12,98,5];
// let search = [98];
// const result = repeat(numArr, search);
// console.log(result);

// function searchVowel(vow){
//     // console.log(vow);
//     let count =0;
//     for(const char of vow){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             count++;
//             }
//         }
//         return count;
//     }

// const sentence = 'This sentence is used to check how many vowels are present';
// const vowels = searchVowel(sentence);
// console.log(vowels);

// function lonWord(arr){
//     // console.log(arr)
//     const word = arr.split(" ");
//     // console.log(word)
//     let longest = word[0];
//     // console.log(longest)
//     let present = word[1];
//     // let temp = [];
//     for(let i =0; i< word.length; i++){
//         if(longest.length < word[i].length){
//             longest = word[i];
//         }
        
//     }
//     return longest;
    
    

// }

// const sentence = 'I am learning Programming to become a programmer';
// const result = lonWord(sentence);
// console.log(result);
let range = 20-10;
console.log(Math.floor(Math.random()*(20-10+1))+10)