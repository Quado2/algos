function reverseLinkedList(linkedLIst){

  let node = linkedLIst;
  let prev = null;
  let next;

  while(node){

 //first save the next;
  next = node.next;

  //reverse the node
  node.next = prev;

  //make the prev to be the current node;
  prev = node;

  //increment the node to be the next node;
  node = next;

  }
  
  
 

  //reverse the node to point to the prev;

  //increment the node in question
}