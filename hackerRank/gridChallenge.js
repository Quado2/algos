function gridChallenge(grid) {

  let result = "YES"
  
  for(let i =0; i<grid.length; i++){
    grid[i] = grid[i].split("").sort();
  }

  const sortedString = []
 
  for(let i=0;i<grid.length; i++){
    for(let j=0; j<grid[0].length; j++){
      sortedString[j] = (sortedString[j]||"")+grid[i][j]
    }
  }

  for(let i=0; i<sortedString.length; i++){
    if(sortedString[i] !== sortedString[i].split("").sort().join("")){
      result = "NO"
      break;
    }
  }

  console.log(result);
  

}

gridChallenge(["NKW","EKE", "ORI","AFO"])

