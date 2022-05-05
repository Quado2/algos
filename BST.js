class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right=null;
  }
}

class BST {
  constructor(value){
    this.root = new Node(value);
    this.count = 1
  }

  size(){
    return this.count;
  }

  insert(value){
    this.count++;

    const newNode = new Node(value);

    function searchTree(node){
      
      //if value is less than the node's value go left
      //otherwise go right;
      if(value < node.value){
        //check if it the last node else keep going by recursiveness
        if(!node.left){
          node.left = newNode;
        } else{
          searchTree(node.left)
        }


        
      }
      //check if value is greater so we go right
      else if(value > node.value){
        if(!node.right){
          node.right = newNode;
        } else{
          searchTree(node.right);
        }
      }
      
    }

    searchTree(this.root);
  }

  min(){
    let currentNode = this.root;
    //keep moving to the left
    while(currentNode.left){
      currentNode = currentNode.left;
    }
    return currentNode.value;

  }

  max(){

    let currentNode = this.root;

    //keep moving right
    while(currentNode.right){
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }

  contains(value){
    let currentNode = this.root;
    while(currentNode){
      if(currentNode.value === value) return true

      if(currentNode.value > value){
        currentNode = currentNode.left;
      }else{
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  //Depth first searches

  //In-order
  //left root right
  dfsInOrder(){
    let result = [];
    
    const traverse = node => {
      //if left child exists, go left again
      if(node.left) traverse(node.left);
      //capture root node value
      result.push(node.value);
      //if right child exists, go right again
      if(node.right) traverse(node.right);
    }

    traverse(this.root)

    return result;

  }

  //pre-order
  dfsPreOrder(){
    let result = [];
    let count = 0;
    const traverse = node => {
      // capture root node
      result.push(node.value);

      //if left child exists, go left again
      if(node.left) {
        console.log("preleft: ", count, node.value)  
        traverse(node.left) 
      };

      //if right child exists go right again
      if(node.right) {
        console.log("Pre-right: ", count, node.value)
        traverse(node.right)
      };
      count ++
    }

    traverse(this.root);

    return result;


  }
  dfsPostOrder(){
    let result = [];

    const traverse = node => {
      //if left node, continue towards left
      if(node.left) traverse(node.left);

      //if right node, traverse towards right
      if(node.right) traverse(node.right)

      //capture root node
      result.push(node.value);
    }

    traverse(this.root);

    return result;
  }

  //breadth first search

  bfs(){
    let result = [];
    let queue = [];
    queue.push(this.root);

    while(queue.length){
      let currentNode  = queue.shift();
      result.push(currentNode.value);
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right);
      }
    }

    return result
  }


  invertTree(){
    const reverseNodes = (node) => {
      if(node == null){
        return
      }

      reverseNodes(node.left);
      reverseNodes(node.right);

      let hold = node.left;
      node.left = node.right;
      node.right = hold;
    }
    reverseNodes(this.root);
  }
  
  
}

const bst = new BST(15)

bst.insert(3);
bst.insert(36);
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

bst.invertTree();
console.log(bst.root);