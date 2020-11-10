/**
 * 队列是一种先进先出（FIFO，First In First Out）的数据结构
 * 只用 push 和 shift 完成增删的“数组”
 * 先进先出
 */
const queue = []
//进队列
queue.push(1)
queue.push(2)
queue.push(3)
//出队列
while(queue.length){
    console.log(queue[0])
    queue.shift()
}