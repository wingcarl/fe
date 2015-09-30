function Node(data,left,right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show(){
	return this.data;
}

function BST_tree_search(node,x){
	var solve = false;
	while(!solve && node){
		if(x == node.data)
			solve = true;
		else if(x < node.data){
			node = node.left;
		}else if(x > node.data){
			node = node.right;
		}
	}
	if(node == null){
		console.log('no result found');
	}
	return node;
}

Node.prototype.add = function(pos,node){
	if(pos == 'left')
		this.left = node;
	else if(pos == 'right')
		this.right = node;
}
function build_BST_tree(node,arr){
	for(var i = 1;i<arr.length;i++){
		node = insert_Node(node,arr[i]);
	}
	return node;
}

function insert_Node(node,x){
	if(node == null){
		node = new Node(x,null,null);
	}else if(node.data > x){
		node.left = insert_Node(node.left,x);
	}else if(node.data <= x){
		node.right = insert_Node(node.right,x);
	}
	return node;
}
function BST_main(){
	var arr = [3,4,7,5,2];
	var node = new Node(arr[0],null,null);
	build_BST_tree(node,arr);
	var n = BST_tree_search(node,7);
	console.log(n.show());
}