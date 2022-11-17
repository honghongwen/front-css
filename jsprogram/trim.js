// 去除空格

var str = ' asf sfa s fq ff g '

function trim(str) {
    var reg = /\s+/g
    if (typeof str === 'string') {
        var trimStr = str.replace(reg, '');
    }
    console.log(trimStr)
}

trim(str)

