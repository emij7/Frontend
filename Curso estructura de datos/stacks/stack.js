class Node{
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Stacks {
    constructor(){
        this.top = null,
        this.bottom = null,
        this.length = 0
    }
    peek(){
        return this.top
    }
    push(value){
        let newValue = new Node (value)
        if(this.length == 0){
            this.bottom = newValue
            this.top = newValue
        }else{
            let topPointer = this.top
            this.top = newValue
            this.top.next = topPointer
        }        
        this.length++;
        return this
    }
    pop(){
        this.top = this.top.next
        if(this.length>0){
            this.length--;
        }
        return this
    }

}
let myStack = new Stacks()