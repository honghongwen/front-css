// 统计字符串中另一字符出现的次数
var str = 'hello, you are cute, i am glad to see you. would you have a dinner with me tonight?'

function countStr(str, target) {
    debugger
    let count = 0
    if (!target) {
        return count
    }
    while (str.match(target)) {
        str = str.replace(target);
        count++
    }

    return count
}

var count = countStr(str, 'a');
console.log(count)
