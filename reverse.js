const sentence='I want to learn web dev';
let reverse=''
for(const word of sentence){
    // console.log(word);
    reverse=word+reverse;
}
console.log(reverse);

for(let i=0; i<sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
}

// const reverse= sentence.split('').reverse().join('');
// console.log(reverse)