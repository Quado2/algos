const myArray = ["Aku", "Nti", "Ebule"];
myArray.myMethod = function (l){
  console.log(arguments.length > 0? this[l]: this);
}

// setTimeout(function(){
//   myArray.myMethod(1);
// }, 100, 2);

/// USIng Bind
const theArray = ["zero","one","two"];
const myBoundMethod = (function(i){
  console.log(arguments.length > 0? this[i]: this)
}).bind(theArray);

// myBoundMethod();
// setTimeout(myBoundMethod, 500,2)


//ANONYMOUS FUNCTION 
// const person = "Ebuka";
// (function(i){
//   console.log(i);
// })("Chidi");

// for(let i= 0; i<5; i++){
//   setTimeout(()=>{
// console.log(i/2, "seconds")
//   }, 500*i)
// }

// for (var i = 1; i <= 4; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, i * 1000);
//   })(i);
// }

//if we use var then it won't work as expected
//becase var is function scopped
// for (var j = 1; j <= 4; j++) {
//   setTimeout(function(){
//     console.log(j);
//   }, 1000*j);
// }


//Function scoped var
// var king = "Okoro"
// if(true){
//   var king = "Eze";
// }

// console.log(king)



//DEALING WITH PROTOTYPES
// const F = function (){
//   this.a = 1;
//   this.b = 2;

// }
// const o = new F();

// F.prototype.b = 3;
// F.prototype.c = 4;


// // console.log(o.b);
// // console.log(o.__proto__.b);


// const randO = {
//   a: 2,
//   m: function(){
//     return this.a+1
//   }
// }

// const p = Object.create(randO);
// p.a = 5;
// console.log(p.m());

// var Storm = function () {};
// Storm.prototype.precip = 'rain';
// var WinterStorm = function () {};
// WinterStorm.prototype = new Storm();
// WinterStorm.prototype.precip = 'snow';
// var bob = new WinterStorm();
// console.log(bob.precip);


// class X{
//   constructor(){
//     // this.Y = 45;
//   }
  
//   get Y(){
//     return 42
//   }

// };

// var x = new X();
// console.log(x.Y);

// sum(10, 20);
// diff(10, 20);
// function sum(x, y) {
//   return x + y;
// }

// let diff = function (x, y) {
//   return x - y;
// };

// function sayHello() {
//   console.log('hello');
// }

// console.log(sayHello.__proto__);

// let a = 5;
// console.log(++a);
// console.log(++a);


// const foo = [1, 2, 3];
// const [n,m, t] = foo;
// console.log(n,t);



// var sound = 'grunt';
// var bear =  {sound: "huff"};
// function roar(name){
//   console.log(this.sound, name)
// }

// roar.apply(bear);


// class RainForest{
//   static minimumRainFall = 60;
// }

// let congo = new RainForest();
// RainForest.minimumRainFall = 80;
// console.log(RainForest.minimumRainFall)

// if (true) {
//   var x = 5;
//   const y = 6;
//   let z = 7;
// }
// console.log(x + y + z);