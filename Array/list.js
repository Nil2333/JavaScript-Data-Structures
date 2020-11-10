/**
 * 链表和数组相似，它们都是有序的列表、都是线性结构（有且仅有一个前驱、有且仅有一个后继）。不同点在于，链表中，数据单位的名称叫做“结点”，而结点和结点的分布，在内存中可以是离散的。
 */
function ListNode(val){
    this.val = val
    this.next = null
}
//增加
const node = new ListNode(0)
const node1 = new ListNode(1)
node.next = node1
//插入
const node2 = new ListNode(2)
node.next = node2
node2.next = node1
//删除
node.next = node2.next
console.log(node)