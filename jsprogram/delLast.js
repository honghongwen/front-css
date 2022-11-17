// 去除最后一位指定字符

var str = ' hello everyone, i am glad to see you'


function delLast(str, lastChar) {
    let split = str.split('').reverse().join('').replace(lastChar, '').split('').reverse().join('');
    console.log(split)
}

function delLast2(str, lastChar) {
    if (typeof str !== 'string') {
        console.log('请输入要删除的字符')
    } else {
        let index = str.lastIndexOf(lastChar);
        let finalStr = str.substring(0, index) + str.substring(index + 1, str.length);
        console.log(finalStr)
    }
}


delLast2(str, 'e')
