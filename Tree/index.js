/*
* 树的层次计算规则：根结点所在的那一层记为第一层，其子结点所在的就是第二层，以此类推。
结点和树的“高度”计算规则：叶子结点高度记为1，每向上一层高度就加1，逐层向上累加至目标结点时，所得到的的值就是目标结点的高度。树中结点的最大高度，称为“树的高度”。
“度”的概念：一个结点开叉出去多少个子树，被记为结点的“度”。比如我们上图中，根结点的“度”就是3。
“叶子结点”：叶子结点就是度为0的结点。在上图中，最后一层的结点的度全部为0，所以这一层的结点都是叶子结点。
* */
function TreeNode(val){
    this.val = val
    this.left = null
    this.right = null
}

const tree = new TreeNode(0)
/*
* 遍历 递归遍历(递归式，递归边界)
* */
const root = {
    val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
}
//先序遍历
function preorder(root){
    if(!root){
        return
    }
    console.log(`当前遍历的结点为${root.val}`)
    preorder(root.left)
    preorder(root.right)
}

// preorder(root)

//中序遍历
function inorder(root){
    if(!root){
        return
    }
    inorder(root.left)
    console.log(`当前遍历的结点为${root.val}`)
    inorder(root.right)
}
// inorder(root)

//后序遍历
function postorder(root){
    if(!root){
        return
    }
    postorder(root.left)
    postorder(root.right)
    console.log(`当前遍历的结点为${root.val}`)
}
postorder(root)