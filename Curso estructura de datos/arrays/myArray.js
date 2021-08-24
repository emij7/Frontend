//A partir de una clase, replico métodos para poder editar un array

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
        // this.copy = {}
    }
    checkIndex(){
        if(this.length>0){
                    this.length--;
                }
    }
    get (index){    //devuelve index del array
        return this.data[index];
    }
    push (item) {   //agrega un item al final del array
        this.data[this.length] = item;
        this.length++;
        return this.data
    }
    // pop(){
    //     this.copy={}
    //     for(let i = 0; i<this.length-1;i++){
    //         this.copy[i] = this.data[i]
    //     }
    //     this.data = this.copy
    //     if(this.length>0){
    //         this.length--;
    //     }
    //     return this.data
    // }
    pop(){      //borra el último elemento del array
        const lastItem = this.data[this.length -1]
        delete this.data[this.length-1]  //Borra el elemento en el index que yo desee
        this.checkIndex()
        return lastItem;
    }
    myDelete(index){           //Borra item en index deseado utilizando ShiftItem
        const deletedItem = this.data[index]
        console.log(this.data[index])
        this.shiftItem(index)
        return deletedItem
    }
    shiftItem(index){       //Función para ser llamada que borra 1 elemento y acomoda los elementos siguientes
        for(let i = index; i < this.length-1;i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.checkIndex()
    }
    shift(){        //Quita primer item
        let deletedItem = this.data[0]
        this.shiftItem(0)
        this.checkIndex()
        return deletedItem
    }
    unshift(item){      //Agrega item al principio
        this.push(undefined)
        for(let i = this.length-1; i > 0;i--){
            this.data[i] = this.data[i-1]
        }        
        this.data[0] = item
        return this.data
    }
}

const myArray = new MyArray;