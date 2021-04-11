
class Node {
	constructor(value) {
		this.value = value;
		this.right = null
		this.left = null
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}
	
	insert(value) {
		const newNode = new Node(value)
		if (!this.root) {
				this.root = newNode;
				return;
		} 
		let currentNode = this.root;
		while (true) {
			if (currentNode.value > value) {
				if (currentNode.left) {
					currentNode = currentNode.left
				} else {
					currentNode.left = newNode;
					return;
				}
			} else {
				if (currentNode.right) {
					currentNode = currentNode.right;
				} else {
					currentNode.right = newNode;
					return;
				}
			}
		}
	}

	lookup(value) {
		let currentNode = this.root;
		while(currentNode) {
			if (currentNode.value === value){
				return true;
			} 
			else {
				if (currentNode.value > value) {
					currentNode = currentNode.left;
				} else {
					currentNode = currentNode.right
				}
			}
		}
		return false;
	}

}

const bTree = new BinaryTree();
bTree.insert(9);
bTree.insert(4);
bTree.insert(6);
bTree.insert(20);
bTree.insert(170);
bTree.insert(15);
bTree.insert(1);

console.log(JSON.stringify(bTree));

console.log(bTree.lookup(170));
console.log(bTree.lookup(5));

