/**
 Do not return anything, modify board in-place instead.
 */
 function gameOfLife(board: number[][]): void {

  const liveNeighborCount = new Map<string, number>();
  const yLength = board.length;
  const xLength = board[0].length;


  for(let y = 0; y < yLength; y ++) {
      for(let x = 0; x < xLength; x ++) {

          const val = board[y][x];
          if(val === 1) {
              for(let i = -1; i <= 1; i++) {
                  for(let j = -1; j <= 1; j++) {
                      const newX = x + j;
                      const newY = y+ i;
                      if(!(i === 0 && j=== 0) && newX >= 0 && newX < xLength && newY >=0 && newY < yLength) {
                          const name =  newY?.toString().padStart(3, "0") + newX?.toString().padStart(3, "0");
                          liveNeighborCount.set(name, (liveNeighborCount.get(name)|| 0)+1)
                      
                      }
                      
                  }
          }
          }
         
      }
  }


  for(let y = 0; y < yLength; y ++) {
      for(let x = 0; x < xLength; x ++) {
          const name = y?.toString()?.padStart(3,"0") + x?.toString().padStart(3, "0") ;
          if(board[y][x] === 0){
             if((liveNeighborCount.get(name) || 0) === 3) {
              board[y][x] = 1
             } 
          }else {
              if((liveNeighborCount.get(name) || 0) < 2) {
                  board[y][x] = 0
              } else if((liveNeighborCount.get(name) || 0) > 3) {
                  board[y][x] = 0;
              }
          }
      }

  }
  
};