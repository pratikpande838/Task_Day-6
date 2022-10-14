
// Question 1: Fix the code to get the largest of three.

// aa = (f,s,t) => {
//     if(f>s && f>t){
//     console.log(f)}
//     else if(s>f && s>t){
//     console.log(s)}
//     else{
//     console.log(t)}
//    }
//    aa(1,2,3);

// _______________________________________________________________________________________________________

// Question 2: Fix the code to Sum of the digits present in the number

// let n = 123;
// n=n.toString().split('');
// console.log(add(n));
// function add(n)
// {
// let sum = 0;
// for(var i=0;i<n.length;i++){
//  sum+=parseInt(n[i]);
//  }
//  return sum;
// }

// __________________________________________________________________________________________________________________

// Question 3: Fix the code to Sum of all numbers using IIFE function

// const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i=0; i< arr.length; i++){
//      sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })()

// _______________________________________________________________________________________________________________________________

// Question 4: Fix the code to gen Title caps.

// var arr = ["guvi", "geek", "zen", "fullstack"];
// var ano = function(arro) {
//  for (var i = 0; i < arro.length; i++) {
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano(arr);

// ________________________________________________________________________________________________________________________________

// Question 5: Fix the code to return the Prime numbers

// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//     x=true;
//     if(num>3){
//         for(let i=2;i<num;i++){
//             if(num%i==0){
//                 x=false;}
//         }
//         return x;
//     }else if(num==2 || num==3){
//         return x;
//     }
//     return false;
// });
// console.log(myPrime);

// _________________________________________________________________________________________________________

// Question 6: Fix the code to sum the number in that array

// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const sumFun = (a, b) => (a + b)
// sum = num.reduce(sumFun)
// console.log(sum);

// _________________________________________________________________________________________________________________________

// Question 7: Fix the code to rotate an array by k times and return rotated array using IIFE function

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//  //arr = {};
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);
// return out})();

// ______________________________________________________________________________________________________________________

// Question 8
// Fix the code to gen Title caps.


// var arr = ["guvi", "geek", "zen", "fullstack"];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
//  }
// })();

// _________________________________________________________________________________________________________________________________

// Question 9: print all odd numbers in an array using IIFE function

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 != 0) {
//  console.log(arr[i]);
//  }}
// })();

// ______________________________________________________________________________________________________________________________

// Question 10: Fix the code to reverse.

// (function(str){
//     str = str.split("").reverse().join("");
//     console.log(str); 
// })("abcd");

// ___________________________________________________________________________________________________________________________________________

// Question 11: Fix the code to remove duplicates.

// var res = function(arr){
//     newArr = [];
//     for(var i=0; i < arr.length; i++){
//     if(arr.indexOf(arr[i]) == i) {
//     newArr.push(arr[i]);
//     } }
//     console.log(newArr)
//    }
//    res(["guvi","geek","guvi","duplicate","geeK"])

// _____________________________________________________________________________________________________________________________________________________

// Question 12
// Fix the code to give the below output:
// Expected Output:
// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]



// var array =[[["firstname","vasanth"],["lastname","Raja"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
// var final=[]
// while(array.length!=0)
// {
//  var outer_remove = array.shift();
//  new_object={};
//  while(outer_remove.length!=0)
//  {
//  var inner_remove = outer_remove.shift()
//  var key = inner_remove[0]
//  var value =inner_remove[1]
//  new_object[key]=value
//  }
//  final.push(new_object)
// }
// console.log(final)






