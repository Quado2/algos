const {wordInputs} = require("./data") 

function processData(input) {
  //Enter your code here
  
  const firstSplit = input.split("\n");
  const arr = firstSplit.map(splits=> splits.split(" "))
  let word = "";
  let activities = []
  activities.push(word)
  for(let i=1; i<arr.length; i++){
   switch(arr[i][0]){
       case "1": {
           //do append
           
           word = word.concat(arr[i][1])
           activities.push(word);
           //save the operation
           
           break;
       }
       
       case "2":{
           //delete the last k characters
           const k = parseInt(arr[i][1])
           word = word.substring(0, word.length-k);
           //save progress
           activities.push(word);
           break;
       }
       case "3": {
           //print the kth character;
           const k = parseInt(arr[i][1])
           console.log(word.charAt(k-1))
           
           break;
           
       }
       case "4":{
           //undo
           if(activities.length>=1){
              activities.pop();
              word = activities[activities.length -1];
          }
          
           break;
       }
       
       default: {
           console.log("Command not recognised")
       }
   }   
  }
} 

processData(wordInputs)

