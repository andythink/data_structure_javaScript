
//用广义表构造二叉树
var originData = 'A(B(D,E(G)),C(F(,H)))@'
/*
思路：default: 

*/

function Node(item){
	this.data = item
	this.lChild = null
	this.rChild = null
}
function createTree(){
	var T = null,
		p = null,
		stack = [],
		top = -1,
		flag = true

	// A(B(D,E(G)),C(F(,H)))@
	
	for(var i=0; originData[i] != '@'; i++){
		var tempData = originData[i]
		switch(tempData){
			case '(':
				stack.push(p)
				top++
				flag = true
				break
			case ',':
				flag = false
				break
			case ')':
				stack.pop()
				top--
				break
			default:
				if(T === null){
					T = p = new Node(tempData)
				}else{
					if(flag){
						stack[top].lChild = p = new Node(tempData)
					}else{
						stack[top].rChild = p = new Node(tempData)
					}
				}
		}
	}
	return T
}
var t = createTree()
//前序遍历
function preVisit(t){
	if(t === null)
		return
	console.log(t.data)
	t.lChild && preVisit(t.lChild)
	t.rChild && preVisit(t.rChild)
}

//中序遍历
function midVisit(t){
	if(t === null)
		return
	t.lChild && midVisit(t.lChild)
	console.log(t.data)
	t.rChild && midVisit(t.rChild)
}

//后序遍历
function afterVisit(t){
	if(t === null)
		return
	t.lChild && afterVisit(t.lChild)
	t.rChild && afterVisit(t.rChild)
	console.log(t.data)
}

//按层遍历
function levelVisit(t){
	var queue = [],
		p = t
	while(p != undefined || p != null){
		p.lChild && queue.push(p.lChild)
		p.rChild && queue.push(p.rChild)
		console.log(p.data)
		p = queue.shift()
	}
}

//求二叉树深度
function depth(t){
	if(t === null)
		return 0
	var leftDepth = t.lChild === null ? 0 : depth(t.lChild)
	var rightDepth = t.rChild === null ? 0 : depth(t.rChild)
	var result = leftDepth >= rightDepth ? leftDepth : rightDepth
	return  result + 1
}
