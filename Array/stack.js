/**
 * 栈是一种后进先出(LIFO，Last In First Out)的数据结构
 * 只用 pop 和 push 完成增删的“数组”
 * 后进先出
 */
const stack = []
//入栈
stack.push(1)
stack.push(2)
stack.push(3)
//出栈
while (stack.length){
    console.log(stack[stack.length-1])
    stack.pop()
}