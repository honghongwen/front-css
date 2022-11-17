// 生成五个随机数 递归实现 数组长度为5且随机数在2~32之间不重复

let arr = new Array(5)
let num = randomNum()
let i = 0

randomArr(arr, num)
function randomArr(arr, num) {
    if (arr.indexOf(num) < 0) {
        arr[i] = num
        i++
    } else {
        num = randomNum()
    }
    if (i >= arr.length) {
        console.log(arr)
    } else {
        randomArr(arr, num)
    }
}

function randomNum() {
    return Math.floor(Math.random() * 31 + 2);
}

