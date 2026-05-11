// Write a BMI calc.

// function bmi(weight, height){
//     return weight / height**2;
// }

// console.log(bmi(69, 1.7).toFixed(2));

// Discount calc.

// function discCalc(discount){
//     return function(price){
//         return price - price*(discount/100);
//     };
// }

// let ten = discCalc(10);
// console.log(ten(200));

// let twenty = discCalc(20);
// console.log(twenty(200));


//objects...

let role = "admin";

let obj = {
    name: "Nik",
    age: 21,
    [role] : "Nik" 
};

// obj.name;

// obj['name']

for(let key in obj){
    console.log(key, obj[key]);
}

console.log(Object.keys(obj));

console.log(Object.entries(obj));

obj2 = {...obj};

let obj3 = JSON.parse(JSON.stringify(obj));

obj?.age;



