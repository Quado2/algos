class Node {
   constructor(data, next=null){
      this.data = data;
      this.next = next;
   }
}

class LinkedList {
   constructor(){
      this.head = null;
      this.size = 0;
   }

 

   //insert first node
   insertFirst (data){
      this.head = new Node(data, this.head);
      this.size++;
   }

   //insert last node
   insertLast(data){
      let node = new Node(data);
      let current;

      //if empty, make the head;

      if(!this.head){
         this.head = node;
      } else{
         current = this.head;
         while(current.next){
            current = current.next;
         }
         current.next = node;
      }

      this.size++
   }

   //insert at index;
   insertAt(index,data){
      if(index > 0 && index > this.size || index < 0) return {success: false, errorMessage:"Index is out range"};

      if(index ===0) {
         this.insertFirst(data);
         return {success: true, errorMessage: null}
      }

      const node = new Node(data);
      let current, previous

      current = this.head;
      let count = 0;

      while(count < index){
         previous = current;
         current = current.next;
         count ++
      }
      node.next = current;
      previous.next = node;
      this.size ++;
      return {success: true, errorMessage: null};

   }

   //Remove at 


   //print list data
   printListData(){
      let current = this.head;

      while(current){
         console.log(current.data);
         current  = current.next;
      }
   }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst("The first one")
ll.insertAt(0, 400);
console.log(ll.insertAt(-1,"big rang"));

ll.printListData()