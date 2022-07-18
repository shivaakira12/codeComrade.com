// // // function mult(){
// // //     var a=10,b=29;
// // //     return a*b;
// // // }
// // // var x=console.log(mult())

// // // (c);
// // // var c=function sum(){
// // //     var a=10,b=20;
// // //     return a+b;
// // // }

// // // console.log(c)

// // //arrow functions 
// // // var a=()=>   console.log("Hello World");
// // // a();

// // // var a=()=>{
// // //     var a=10,b=10
// // //     return total=a+b
// // // }
// // // a()
// // // console.log(total)


// // function reverse()
// // {
// //     let n,k;
// //     let rev=0;
// //     while(n!=0){
// //         k=n%10;
// //         rev=rev*10+k;
// //         n=n/10;
// //     }
// //     return rev
// // }
// // console.log(reverse(123))

// // var n=123;
// // var k;
// // var rev=0;
// // while(n>0){
// //     k=n%10;
// //     rev=rev*10+k;
// //     n=floor(n)
// // }
// // console.log(rev)


// //String palindrome or not
// // function palindrome(){
// //     var x="madam";
// //     var y="";
// //     for (i=x.length-1;i>=0;i--){
// //         y=x[i]+y
// //     }
// //     if(x==y){
// //         console.log("palindrome")
// //     }
// //     else{
// //         console.log("not")
// //     }
// // }
// // palindrome();

// //Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

// // function uppercase(str) {
// //   var array1 = str.split(' ');
// //   var newarray1 = [];

// //   for (var x = 0; x < array1.length; x++) {
// //     newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
// //   }
// //   return newarray1.join(' ');
// // }
// // console.log(uppercase("the quick brown fox"));



// // function longestword(str) {
// //   var str2 = str.split(" ")
// //   var longestword1 = ""
// //   for (var word of str2){
// //     if(word.length>longestword1.length)
// //     {
// //     longestword1=word;
// //     }
// //   }
// //   console.log( longestword1);
// // }
// // longestword("My name is shiva")



// //count no fo vowels
// // function vowels(str){
// //   var count=0
// //   var str1='aeiouAEIOU'
// //   for (x =0;x<str1.length;x++){
// //     if(str1.indexOf(str[x] > -1))
// //     count=count+1
    
// //   }
// //   console.log(count)
// // }
// // (vowels("i am god"))


// //prime ornot
// // function prime(num){
// //   count=0;
// //   for(var i=0;i<=num;i++)
// //   if(num%i==0){
// //     count=count+1
// //   }
// // if(count==2)
// // {
// //   console.log("prime")
// // }
// // else{
// //   console.log("not")
// // }

// // }
// // prime(4)




// ARRAYS IN JAVASCRIPT


// Arrays are the indexed collection of elements.
// Arrays are used to store the ordered data elements.
// Arrays are used to store the multiple values into a single variable.
// Generally arrays in other programming languages stores only homogenous data but in Javascript arrays we can store the heterogenous data.

// How to declare the Arrays ?
// These are the ways to declare the arrays in javascript

// 1.Var Arrayname=[“data1”,“data2”,“data3”,“data4”,“data5”]
// 2.var Arrayname=new Array(““data1”,“data2”,“data3”,“data4”,“data5”)


// How to create an empty array ?


// var arrayname = []
// var arrayname = new Array()

// Array elements are numbered ,starting with zero.
// We can get an element by its numbers in square brackets:

// let Avengers = [“Ironman”,”Captain America,”Thor”]
// console.log(Avengers[0]);  //Ironman
// console.log(Avengers[1]);  //Captain America
// console.log(Avengers[2]);  //Thor
// console.log(Avengers[1000]);  //undefined

// We can replace the item with specified index in square brackets

// let Avengers = [“Ironman”,”Captain America,”Thor”]
// Avengers[0]=“Thanos”
// console.log(Avengers) // [Thanos , Captain America, Thor]


// We can find the length of array by using the length;

// let Avengers = [“Ironman”,”Captain America,”Thor”]
// console.log(Avengers.length) // 3

// NOTE : Javascript won’t allow to use the negative indexing like other languages we use the “at” to get the last element
//  let Avengers = ["Ironman","Captain America","Thor"]
// console.log(Avengers.at(-1)); // Thor 



// methods in arrays:
// let Avengers = ["Ironman","Captain America","Thor"]
// console.log(typeof(Avengers))
// Avengers.pop();  //['Ironman', 'Captain America']
// Avengers.push("The Hulk"); //['Ironman', 'Captain America', 'The Hulk']
// Avengers.shift() //['Captain America', 'The Hulk']
// Avengers.unshift("Docter Strange") ///['Docter Strange', 'Captain America', 'The Hulk']



// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// // what's in fruits?
// console.log( fruits.length ); // 


var x=function b(){
    var a=10
    var b=10
    console.log(a+b);
}
b();

