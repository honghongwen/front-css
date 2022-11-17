function wrapper() {
    let count = 0

    return function inner() {
        return count++
    }
}

let wrapperRef = wrapper();
let wrapperRef2 = wrapper();

console.log(wrapperRef())
wrapperRef()
wrapperRef()
console.log(wrapperRef())


wrapperRef2()
wrapperRef2()
console.log(wrapperRef2())
