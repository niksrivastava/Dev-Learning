// // // // // // // // condionals...

// // // // // // // // // // let age = 53;
// // // // // // // // // // if(age >= 18){
// // // // // // // // // //     console.log("Can vote")
// // // // // // // // // // }
// // // // // // // // // // else{
// // // // // // // // // //     console.log("Can't Vote")
// // // // // // // // // // }

// // // // // // // //switch case...

// // // // // // // // // // let num = 0;
// // // // // // // // // // switch(num){
// // // // // // // // // //     case 1: console.log("A");
// // // // // // // // // //     break;
// // // // // // // // // //     case 2: console.log("B");
// // // // // // // // // //     break;
// // // // // // // // // //     case 3: console.log("C");
// // // // // // // // // //     break;
// // // // // // // // // //     case 4: console.log("D");
// // // // // // // // // //     break;
// // // // // // // // // //     case 5: console.log("E");
// // // // // // // // // //     break;
// // // // // // // // // //     default: console.log("Seva Samapt...Bharat Mata Ki Jai.");
// // // // // // // // // // }

// // // // // // // //loops...

// // // // // // // // // // for(let i = 1; i <= 5; i++){
// // // // // // // // // //     console.log("Nikhil");
// // // // // // // // // // }

// // // // // // // // // // for(let i = 5; i>0; i--){
// // // // // // // // // //     console.log(i);
// // // // // // // // // // }

// // // // // // // // // // let i = 1;
// // // // // // // // // // while(i<=5){
// // // // // // // // // //     console.log("Nikhil");
// // // // // // // // // //     i++;
// // // // // // // // // // }


// // // // // // // // // // let i =1;

// // // // // // // // // // while(i<=5){
// // // // // // // // // //     console.log(i);
// // // // // // // // // //     i++;    
// // // // // // // // // // }

// // // // // // // // // let i =1;
// // // // // // // // // while (i<5){
// // // // // // // // //     if(i==3){
// // // // // // // // //         i++;
// // // // // // // // //         continue;
// // // // // // // // //     }
// // // // // // // // //     else{
// // // // // // // // //         console.log(i);
        
// // // // // // // // //     }
// // // // // // // // //     i++;
// // // // // // // // // }

// // // // // // // // // let i = 1;
// // // // // // // // // do{
// // // // // // // // //     console.log(i);
// // // // // // // // //     i++;
// // // // // // // // // }while(i<5);


// // // // // // // //strings...

// // // // // // // // let name = "nikhil";
// // // // // // // // let name2= 'Nikhil';
// // // // // // // // let name3 = `this
// // // // // // // // is 
// // // // // // // // Nikhil`;
// // // // // // // // let name4 = new String("Nikhil");
// // // // // // // // console.log(name4);

// // // // // // // let op1 = "Hindi ";
// // // // // // // let op2= "English";
// // // // // // // let ans= op1+op2;
// // // // // // // console.log(ans);
// // // // // // // let ans2 = `${op1}${op2}`;
// // // // // // // console.log(op1.toUpperCase());
// // // // // // // console.log(op2.toLowerCase());
// // // // // // // console.log(ans2);
// // // // // // // console.log(op1.length);

// // // // // // // console.log(op1.substring(2, 4));

// // // // // // // let op3 = "hello jee \"kaise\" ho saare";
// // // // // // // let word= op3.split(" ");
// // // // // // // console.log(word);
// // // // // // // let sentence = word.join(",");
// // // // // // // console.log(sentence);
// // // // // // // sentence = word.join("-");
// // // // // // // console.log(sentence);

// // // // // // // //Functions...

// // // // // // //...function defination...
// // // // // // function saymyname(){
// // // // // //     console.log("Nikhil");
// // // // // // }

// // // // // // //...function call...
// // // // // // saymyname();

// // // // // // function printcounting(){
// // // // // //     for(let i = 1; i <=100; i++){
// // // // // //         console.log(i);
// // // // // //     }
// // // // // // }

// // // // // // printcounting();

// // // // // // function printnumber(num){
// // // // // //     console.log(num);
// // // // // // }

// // // // // // printnumber(5);

// // // // // // function getSum(num1, num2){
// // // // // //     let sum = num1+ num2;
// // // // // //     return sum;
// // // // // // }

// // // // // // let ans = getSum(7, 3);
// // // // // // console.log(ans);

// // // // // // function getAvg(num1, num2){
// // // // // //     let avg = (num1+num2)/2;
// // // // // //     return avg;
// // // // // // }

// // // // // // let avg_ans= getAvg(7, 1);
// // // // // // console.log(avg_ans);

// // // // // // function getName(str1, str2){
// // // // // //     let name = str1 + "  " + str2;
// // // // // //     return name;
// // // // // // }

// // // // // // let Name = getName("Nikhil", "Kumar");
// // // // // // console.log(Name);

// // // // // // const get_Mul = function(num1, num2){
// // // // // //     return num1*num2;
// // // // // // }

// // // // // // console.log(get_Mul(2,20));

// // // // // // let get_pow = (x,y) => {
// // // // // //     let ans = x**y;
// // // // // //     return ans;
// // // // // // }

// // // // // // console.log(get_pow(2,10));



// // // // // // Object...

// let obj = {
//     name: "Nikhil",
//     age: 22,
//     height : "5.5 ft",
//     weight: 60,
//     greet: function() {
//         console.log("Hey....buddy!!!!");
//     }
// };

// for(let key in obj)
//     {
//         console.log(key);

//     }

// // // // // obj.greet();
// // // // // console.log(obj);
// // // // // console.log(typeof(obj))

// // // // // creation of Arrays...

// // // // let arr = [1, 2, 4, 3, 6];

// // // // let brr = new Array(1, 'love', true);

// // // // console.log(arr);
// // // // brr.push("babbar");
// // // // brr.pop("babbar");
// // // // brr.shift();
// // // // brr.unshift("love babbar");
// // // // brr.push(45);
// // // // brr.push(48);
// // // // brr.push(50);
// // // // // brr.slice(2,4);
// // // // // console.log(brr.slice(2,4));
// // // // brr.splice(1,2,"Nikhil");
// // // // console.log(brr);
// // // // console.log(typeof(arr));
// // // // console.log(typeof(brr));
// // // // console.log(arr[2]);
// // // // console.log(brr[1]);

// // // // let arr = [10,20,30,11,22,33,44];

// // // // let ans = arr.map((number) => {
// // // //     return number*number;
// // // // })

// // // // console.log(ans);

// // // // arr.map((number, index) => {
// // // //     console.log(number);
// // // //     console.log(index);
// // // // })

// // // // let ans = arr.filter((number)=>{
// // // //     if(number%2===0){
// // // //         return true;
// // // //     }
// // // //     else{
// // // //         return false;
// // // //     }
// // // // });


// // // let arr = [1,2,3,"love"]
// // // let ans = arr.filter((value) => {
// // //     return typeof(value) == 'number';
// // //     return typeof(value) === 'string';
    
// // // })
// // // console.log(ans);


// // let arr = [10,20,30,40];

// // let ans = arr.reduce((acc,curr)=>{
// //     return acc+curr;
// // },0);

// // console.log(ans);

// // let arr = [1,4,8,3,90,5,83];
// // arr.sort();
// // console.log(arr)
// // console.log(arr.indexOf(90));

// // arr.forEach((value,index)=>{
// //     console.log("Number: ", value, "Index: ", index)
// // })

 

// let arr = [10,20,30,40];

// for(let value of arr){
//     console.log(value);
// }

// let name = "Nikhil";
// for(let value of name){
//     console.log(value);
// }

let arr = [10,20,30,40,50];
    function get_sum(arr){
        let sum = 0;
        arr.forEach(element => {
            sum += element;
        });
        return sum;
    }

    let total_sum = get_sum(arr);
    console.log(total_sum);