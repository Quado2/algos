class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty, make the head;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  //insert at index;
  insertAt(index, data) {
    if ((index > 0 && index > this.size) || index < 0)
      return { success: false, errorMessage: "Index is out range" };

    if (index === 0) {
      this.insertFirst(data);
      return { success: true, errorMessage: null };
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    node.next = current;
    previous.next = node;
    this.size++;
    return { success: true, errorMessage: null };
  }

  //get data at
  getAt(index) {
    let current = this.head;
    let count = 0;
    if (index < 0) {
      return { success: false, errorMessage: "Cannot index negative values" };
    }

    while (current) {
      if (count == index) {
        return current.data;
      }

      count++;
      current = current.next;
    }

    return null;
  }

  //remove at
  removeAt(index) {
    if ((index > 0 && index > this.size) || index < 0)
      return { success: false, errorMessage: "Index is out range" };

    let current = this.head;
    let previous;

    if (index === 0) {
      this.head = current.next;
      return { success: true, errorMessage: null };
    }

    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    return { success: true, errorMessage: null };
  }

  //print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //merge another list
  merge(node){
   let current = this.head;
   while(current.next){
       current = current.next;
   }
   current.next = node
}

}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst("The first one");
ll.insertAt(0, 400);
//console.log(ll.head.data);

class NewLinked {
  constructor() {
    this.data = null;
    this.next = null;
    this.size = 0;
  }

  insertLast(data) {
    let node = new Node(data);
    if (!this.data) {
      this.data = data;
      this.size++;
      return;
    }
    if (this.size === 1) {
      this.next = node;
      this.size++
    } else {
       let current = this.next;
       while(current.next){
          current = current.next
       }
       current.next = node;
       this.size++
    }
  }

  insertFirst(data) {
    if (!this.data) {
      this.data = data;
    } else {
      this.next = new Node(data);
    }
  }
}

const nl = new NewLinked();

//console.log(nl);




// class Node{
//    constructor(data, next){
//       this.data = data;
//       this.next = next ? next: null; 
//    }
// }

// class LinkedList {
//    constructor() {
//      this.data = null;
//      this.next = null;
//      this.size = 0;
//    }

//    push(data, next) {
//       let node = new Node(data, next);
//       if (!this.data) {
//         this.data = data;
//         this.size++;
//         return;
//       }
//       if (this.size === 1) {
//         this.next = node;
//         this.size++
//       } else {
//          let current = this.next;
//          while(current.next){
//             current = current.next
//          }
//          current.next = node;
//          this.size++
//       }
//     }
//   }

//   let sortedList = new LinkedList();
//   sortedList.push(100);
//   sortedList.push(200);
//   sortedList.push(300);
//   console.log(sortedList);




//solution to hackerank challenge
function mergeLists(head1, head2) {
   if(!head1) return head2
   if(!head2) return head1

   let list1 = new LinkedList();
   let list2 = new LinkedList();
   let sortedList = new LinkedList();
   list1.head = head1;
   list2.head = head2;
   
   

   let current = list1.head;
   let current2 = list2.head;
   while(current || current2){
       if(current && current2){
           if(current.data > current2.data){
               sortedList.insertLast(current2.data);
           current2 = current2.next;
           }else{
               sortedList.insertLast(current.data);
               current = current.next;
           }
           
       }
       if(!current){
           sortedList.finish(current2)
           break;
       }
       if(!current2){
         sortedList.finish(current)
         break;
       }
       
       
   }
   
   return sortedList.head

}


