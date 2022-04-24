const myArray = ["Aku", "Nti", "Ebule"];
myArray.myMethod = function (l){
  console.log(arguments.length > 0? this[l]: this);
}

setTimeout(function(){
  myArray.myMethod(1);
}, 1000, 2);

/// USIng Bind
const theArray = ["zero","one","two"];
const myBoundMethod = (function(i){
  console.log(arguments.length > 0? this[l]: this)
}).bind(theArray);

myBoundMethod();