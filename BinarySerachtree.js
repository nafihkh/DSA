class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    Insert(value){
        let newNode = new Node(value);

        if(this.root == null){
            this.root = newNode;
            return;
        }

        let current = this.root;

        while(true){
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if(current.right === null)
                {
                    current.right = newNode;
                    return ;
                }
                current = current.right; 
            }
        }
    }
    search(value){
        let current = this.root;

        while(current !== null){
            if(current.value === value) return true;
            if(value < current.left){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }

};

const bst = new BinarySearchTree();

bst.Insert(10);
bst.Insert(50);
bst.Insert(40);
bst.Insert(30);
bst.Insert(20);
console.log(bst.search(40));