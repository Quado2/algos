const someFunction1 = () => {
    console.log(this);
  };
  
  function someFunction2() {
    console.log(this);
  }
  
  const obj = {
    someFunction1: someFunction1,
    someFunction2: someFunction2
  };
  
  obj.someFunction1();
  obj.someFunction2();