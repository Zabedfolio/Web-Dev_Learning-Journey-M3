//  condition: 
// 1) if the year is divisible by 4
// 2) not divisible by 100


function isLeapYear(year){
    if(year%400===0 || year%4===0 && year%100 !==0){
        return true;
    }
    else{
        return false;
    }
}

const isLeap = isLeapYear(2000);
console.log(isLeap);