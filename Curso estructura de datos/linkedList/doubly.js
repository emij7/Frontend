class Node {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class MyDoublyLinkedList {
   //El valor nos permite iniciar esta estructura de datos con un elemento dentro. 
   constructor(value) {
       //Cabeza de la Linked List
       this.head = {
           value: value,
           next: null,
           prev: null,
       }
       //La cola de la Linked List también está apuntada a la cabeza por lo que no existe ningún otro valor 

       this.tail = this.head

       //Contamos los elementos de la lista
       this.lenght = 1
   }
   append(value){
       let newValue = new Node(value)
       let prevValue = this.tail
       this.tail.next = newValue
       this.tail=newValue
       this.tail.prev = prevValue
       this.lenght++
   }
   prepend(value){
       let newValue = new Node(value)
       newValue.next = this.head
       this.head.prev = newValue
       this.head = newValue
       this.lenght++
   }
   getIndex(index){
       let counter = 0
       let currentNode = this.head
       while(counter !== index){
           currentNode = currentNode.next
           counter++;
       }
       return currentNode
   }
   insert(index,value){
       if(index>this.lenght){
           this.append(value)
       }
       const newValue = new Node(value)
       const prevPointer = this.getIndex(index-1)
       const nextPointer = prevPointer.next
       prevPointer.next = newValue
       newValue.prev = prevPointer
       newValue.next = nextPointer
       nextPointer.prev = newValue
       this.lenght++;
       return this;
   }
   remove(index){ //delete
        let toRemove = this.getIndex(index)
        let prevPointer = this.getIndex(index-1)
        let nextPointer = this.getIndex(index+1)
        prevPointer.next = nextPointer
        nextPointer.prev = prevPointer
        this.lenght--;
   }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1)