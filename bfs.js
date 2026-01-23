
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


function bfs(root){
    if(!root) return;

    let que = [root];

    while(que.length > 0){
        let node = que.shift();
        console.log(node.value);
        if(node.left) que.push(node.left);
        if(node.right) que.push(node.right)
    }
    
}
bfs(root)
