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
            }
            while(condition == true){
                value<currentNode.value?
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
        return this
    }
}
let tree = new BSTree()