/**
 * 数组 Array
 */

/**
 * 创建
 */
//字面量申明
const arr1 = [1,2,3]
//构造函数创建
const arr2 = new Array(3)
//创建一个长度确定、同时每一个元素的值也都确定的数组
const arr3 = new Array(3).fill(1)

/**
 * 访问和遍历
 * 从性能上看，for 循环遍历起来是最快的
 */
//通过数组的下标访问
const temp = arr1[0]
//for
for(let i=0;i<arr1.length;i++){
    console.log(i,arr1[i])
}
//forEach
arr1.forEach((item,index)=>{
    console.log(item,index)
})
//map
const tempArr = arr1.map((item,index)=>{
    console.log(item,index)
    return item+1
})

/**
 * 二维数组(矩阵)
 */
//初始化矩阵

//fill的局限性
/**
 * fill的参数是一个引用类型时，会同时修改其他的元素
 */
const matrix = new Array(3).fill([])
matrix[0][0] = 1
console.log(matrix)

//for循环生成矩阵
const outerArr = new Array(3)
for(let i=0;i<outerArr.length;i++){
    outerArr[i] = []
}
console.log(outerArr)
//矩阵的遍历
for(let i=0;i<outerArr.length;i++){
    for(let j=0;j<outerArr[i].length;j++){
        console.log(outerArr[i][j])
    }
}

/**
 * 增删数据操作
 */
//增加元素
{
    const arr = [1,2,3]
    //头部添加
    arr.unshift(0)
    //尾部添加
    arr.push(4)
    //splice添加至指定下标
    arr.splice(5,0,5)
    console.log(arr)

    //删除元素
    const arr1 = [0,1,2,3,4,5]
    //删除头部
    arr1.shift()
    //删除尾部
    arr1.pop()
    //删除指定元素
    arr1.splice(3,1)
    console.log(arr1)
}

