const myArray = ["Aku", "Nti", "Ebule"];
myArray.myMethod = function (l){
  console.log(arguments.length > 0? this[l]: this);
}

setTimeout(function(){
  myArray.myMethod(1);
}, 1000, 2);