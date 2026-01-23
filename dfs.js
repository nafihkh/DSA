
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
    //     10
    //    /  \
    //   5    15
    //  / \     \
    // 3   7     20

let root = new Node(10);
root.left = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right = new Node(15);
root.right.right = new Node(20)


function dfs(root){
    if(!root) return;
    
 console.log(root.value);
    dfs(root.left);
    dfs(root.right);
    
}
dfs(root)
