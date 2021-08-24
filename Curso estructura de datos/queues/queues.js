class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Queue {
    constructor(){
        this.top = null,
        this.bottom = null,
        this.length = 0
    }
    peek(){
        return this.bottom
    }
    enqueue(value){
        let newValue = new Node (value)
        if(this.length == 0){
            this.bottom = newValue
            this.top = newValue
        }else{
            this.top.next = newValue
            this.top = newValue
        }        
        this.length++;
        return this
    }
    dequeue(){
        this.bottom = this.bottom.next
        this.length--;
        return this
    }

}
let myQueue = new Queue()