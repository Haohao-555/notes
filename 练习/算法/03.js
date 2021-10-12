/**
描述
    使用二分查找从一组有序且不重复的数组arr里，寻找目标item，并返回item所在位置的索引，如果没有找到则返回 -1。
    
例子：
    数组arr：[1,2,3,4,5]
    item = 3，则返回 2
    item = 0，则返回 -1
    item = 2.5，则返回 -1
    item = 10，则返回 -1

输出描述：
    如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

示例1
    输入：
    [1,2,3,4,5], 3

    输出：
    2
 */
function indexOf(arr, item) {
   return arr.findIndex((i, index) => {
       return i == item;
   })
}