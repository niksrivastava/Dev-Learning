// Write a BMI calc.

// function bmi(weight, height){
//     return weight / height**2;
// }

// console.log(bmi(69, 1.7).toFixed(2));

// Discount calc.

function discCalc(discount){
    return function(price){
        return price - price*(discount/100);
    };
}

let ten = discCalc(10);
console.log(ten(200));

let twenty = discCalc(20);
console.log(twenty(200))
