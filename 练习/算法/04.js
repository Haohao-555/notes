function sum(arr) {
    return arr.reduce((pre, next) => {
        return pre += next;
    })
}
console.log(sum([1,2,3,4]));