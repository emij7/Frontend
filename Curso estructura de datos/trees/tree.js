class Node {
    constructor(value){
        this.left = null,
        this.right = null,
        this.value = value
    }
}

class BSTree {
    constructor() {
        this.root = null        
    }
    insert(value){
        const newValue = new Node(value)
        if(this.root === null){
            this.root = newValue
        }else{
            let currentNode = this.root
            let condition = true
            if(value == currentNode.value){
                console.log('error, valor repetido')
            }else{
                while(condition == true){
                    value == currentNode.value?(
                        console.log('error, valor repetido'),
                        condition = false)    
                        :value<currentNode.value?
                            currentNode.left == null?(
                                currentNode.left=newValue,
                                condition = false)
                                :currentNode = currentNode.left
                            :currentNode.right == null?(
                                currentNode.right=newValue,
                                condition = false
                            )
                                :currentNode = currentNode.right                    
                }
            }
                   
        }
        return this
    }
    find(value, current){
        if(value==current.value){
            return (true,
                console.log('Valor existente'))
        }else{
            value<current.value?
                current.left == null?
                    console.log('Valor inexistente')
                    :(  
                        current = current.left,
                        this.find(value,current)
                        )
                :current.right == null?
                    console.log('Valor inexistente')
                    :(  
                        current = current.right,
                        this.find(value,current)
                        )                
        }
    }
    search(value, current = this.root){
        if(this.root == null){
            return console.log('Tree vacío.')
        }else{
            this.find(value, current)
        }
        
    }
}
let tree = new BSTree()