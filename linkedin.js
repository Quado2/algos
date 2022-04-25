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
const person = "Ebuka";
(function(i){
  console.log(i);
})("Chidi");

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

var king = "Okoro"
if(true){
  var king = "Eze";
}

console.log(king)


