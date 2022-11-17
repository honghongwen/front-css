// 加密解密

function encode(str, key) {
    return str.split('').map(item => {
        let number = item.charCodeAt();
        return number * key
    }).join("#")
}

function decode(str, key) {
    return str.split('#').map(item => {
        let number = item / key;
        return String.fromCharCode(number)
    }).join('')
}

let data = encode("ahello world", 77);
console.log(data)

let decodeData = decode(data, 77);
console.log(decodeData)
