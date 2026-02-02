// let num=78;
// while(num<=60){
//     console.log('I will invest at least 6 hrs every single day for next 60 days!');
//     num++;
// }

// while(num<=98){
//     if(num%2===1){
//         console.log(num);
//     }
//     num++;
// }

// let num=81;
// let sum=0;
// while(num<=131){
//     if(num%2===1){
//         sum+=num;
//     }
//     num++;
//     console.log(sum);
// }
// console.log('Total: ',sum);

// let num=5;
// while(num<=100){
//     if(num%5===0){
//         console.log(num);
//     }
//     num++;
// }

// let start=21;
// let finish=15;
// while(start>=finish){
//     console.log(start);
//     start--;
// }

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors["golden rod"])

// const car={
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car["passenger capacity"]=5;
// console.log(car)

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan tapan",
//         marks: 30
//     }
// }

// console.log(student.physics.marks)

// let student ={
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibanda',
//     isStudent: true 
// }
// // let count = Object.keys(student).length;
// // console.log(count)
// console.log(Object.keys(student).length)

// let myObject={
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true 
// }

// let key = Object.keys(myObject)
// let value = Object.values(myObject)

// for(let i=0; i<key.length;i++){
//     console.log('Key: ', key[i], '|', 'type: ', typeof value[i]  )
// }

// const colors =['red', 'blue', 'green', 'yellow', 'orange'];

// const col_rev=[];

// for(const col of colors){
//     col_rev.unshift(col)
// }
// console.log(col_rev)

// const numbers=[12,98,5,41,23,78,46];
// let num=[];

// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]%2===0)
//     num.push(numbers[i])
// }
// console.log(num);


// var numbers=['Tom','Tim','Tin','Tik'];

// let con=[];

// for(let i=0; i<numbers.length;i++){
//    con.push(numbers[i]);
// }

// console.log("'",con.join(""),"'");
// console.log(numbers);

// const statement = 'I am a hard working person';
// const rev= statement.split(" ")
// // console.log(rev)

// let reverse=''

// for(const word of rev ){
//     // console.log(reverse)
//     reverse=word+" "+reverse;
// }

// console.log(reverse)
// const word_rev='';
// for(const word of statement){
//     console.log(word)
// }

// const arr=[1,2,3];

// const arr2 =[];

// for(let i=0; i<arr.length; i++){
//     arr2.push(arr[i]);
// }

// arr[0]=99;
// console.log('Original:',arr2, 'Copy:', arr)

// const student = [
//     {name: "John", marks: 85},
//     {name: "Alice", marks: 90}
// ]

// console.log(student[0].name, 'scored', student[0].marks)
// console.log(student[1].name, 'scored', student[1].marks)

// const arr=[
//     [1,2],
//     [3,4],
//     [5,6]
// ]

// arr[1][0]=99;

// console.log(arr);

// const str='xy YX xxxX YyyyxyY';
// let countX = 0;
// let countY = 0;

// for(let char of str){
//     if (char ==='x' || char==='X'){
//         countX++;
//     }
//     if (char ==='y' || char==='Y'){
//         countY++;
//     }
    
// }

// console.log('X or x appears: ', countX,'times')
// console.log('Y or y appears: ', countY,'times')

// let newStr= str.replaceAll('x', '#').replaceAll('X','x').replaceAll('#','X').replaceAll('y', '#').replaceAll('Y','y').replaceAll('#','Y');
// console.log(newStr)

// let str="zabed mahmud"
// const spl = str.split(' ')
// let upperCase="";
// // console.log(spl);

// for(const word of spl){
//     upperCase = str[0].toUpperCase()+str.slice(1);
// }
// console.log(upperCase)

