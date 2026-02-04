//  12 inch = 1 feet

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch '; 
    return result;
}
// const shuvoHeight = inchToFeet(65);
// console.log(shuvoHeight)

const height = inchToFeet2(65);
console.log(height);