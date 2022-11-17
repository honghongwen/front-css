var str = 'hello_world_peace_wish'

function toCamel(str) {
    if (typeof str !== 'string') {
        return str
    }
    let strings = str.split('_').map(item => item.charAt(0).toUpperCase() + item.substring(1, item.length)).join('')
    let s = strings.charAt(0).toLowerCase() + strings.substring(1, strings.length);
    console.log(s)
}

toCamel(str)
