/**
  描述
        移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
  
  示例1
        输入：
        [1, 2, 3, 4, 2], 2

        输出：
        [1, 3, 4]
 */
// 不修改原数组
function remove(arr, item) {
    return arr.filter((i) => {
        return i != item;
    })
}
// console.log(remove([1, 2, 3, 4, 2], 2));

// 修改原数组
function removeWithoutCopy(arr, item) {
    arr.forEach((e, i, arr) => {
        if (e == arr[i]) {
            arr.splice(i, 1);
        }
    });
    return arr
}
// console.log(remove([1, 2, 3, 4, 2], 2));

// 添加元素（不修改原数组）
function append(arr, item) {
    return [...arr, item];
}
// console.log(append([1, 2, 3, 4], 5))

// 删除元素（不修改原数组）
function truncate(arr) {
    return arr.slice(0, arr.length - 1);
}
// console.log(truncate([1, 2, 3, 4]))

// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
function insert(arr, item, index) {

    return [...arr.slice(0, index), item, ...arr.slice(index, arr.length)]
}
// console.log(insert([1, 2, 3, 4], 'z', 2))

// 统计数组 arr 中值等于 item 的元素出现的次数
function count(arr, item) {
    return arr.filter(e => e == item).length;

}
// console.log(count([1, 2, 4, 4, 3, 4, 3], 4))

// 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
function duplicates(arr) {
    var obj = {};
    var n_arr = new Set();
    arr.forEach(e => {
        if (obj[e]) {
            n_arr.add(e)
        } else {
            obj[e] = true;
        }
    })
    return Array.from(n_arr)
}
// function duplicates(arr) {
//     var temp = [];
//     arr.forEach(function(elem){
//         if(arr.indexOf(elem) != arr.lastIndexOf(elem) && temp.indexOf(elem) == -1){
//             temp.push(elem);
//         }
//     });
//     return temp;
// }
// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3])) 

function square(arr) {
    return arr.map(e => e ** 2);
}
// console.log(square([1, 3, 4, 5]))

// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function findAllOccurrences(arr, target) {
    var index_arr = [];
    while(arr.includes(target)) {
        var index = arr.findIndex(e => e == target);
        arr.splice(index, 1, '');
        index_arr.push(index);
    }
    return index_arr;
}
console.log(findAllOccurrences(['a','b','c','d','e','f','a','b','c'],'a'))
