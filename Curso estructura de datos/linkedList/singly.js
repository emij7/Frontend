class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class MySinglyLinkedList {
   //El valor nos permite iniciar esta estructura de datos con un elemento dentro. 
   constructor(value) {
       //Cabeza de la Linked List
       this.head = {
           value: value,
           next: null,
       }
       //La cola de la Linked List también está apuntada a la cabeza por lo que no existe ningún otro valor 

       this.tail = this.head

       //Contamos los elementos de la lista
       this.lenght = 1
   }
   append(value){
       let newValue = new Node(value)
       this.tail.next = newValue
       this.tail=newValue
       this.lenght++
   }
   prepend(value){
       newValue = new Node(value)
       newValue.next = this.head
       this.head = newValue
       this.lenght++
   }
   insert(index,value){
       if(index>this.lenght){
           this.append(value)
       }
       const newValue = new Node(value)
       const prevPointer = this.getIndex(index-1)
       const nextPointer = prevPointer.next
       prevPointer.next = newValue
       newValue.next = nextPointer
   }
//    append(value) {
//        //Recibimos el valor y lo añadimos al final
//        let currentNode = new Node(value)
//        //Cambiamos el valor siguiente(next) de la cola(tail).
//        this.tail.next = currentNode
//        //El último Nodo se convierte ahora en la nueva cola (tail)
//        this.tail = currentNode
//        this.lenght++
//    }
}

let mySinglyLinkedList = new MySinglyLinkedList(1)