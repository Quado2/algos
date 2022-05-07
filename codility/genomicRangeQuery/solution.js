// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    const genoMap = new Map();
    genoMap.set("A",0);
    genoMap.set("C",1);
    genoMap.set("G",2);
    genoMap.set("T",3);

    let initial = [0,0,0,0];
    let stringLength = S.length;
    
    let prefixSum = []

    //the prefix sum used here is a progressive one such that an element of the 
    //prefix array is an element showing the count of each element up until
    //that index.

    //We will now initializie the first one by mapping the first string;

    //initial[genoMap.get(S.charAt(0))] = 1;
    prefixSum[0] = [...initial]
    

    for(let i=1; i < stringLength+1; i++){
        let copy = [...prefixSum[i-1]];
        let theChar = S.charAt(i-1);
        copy[genoMap.get(theChar)] += 1;
        prefixSum.push(copy)
    }
    let result = [];
    for(let i = 0; i<P.length; i++){
        const lower = prefixSum[P[i]];
        const upper = prefixSum[Q[i]+1];
        
        for(j=0; j<4; j++){
            if((upper[j] - lower[j]) > 0){
                result.push(j+1);
                break;
            }
        }
        
    }
    return result

   
    
}