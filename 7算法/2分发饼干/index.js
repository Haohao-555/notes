/**
 * 
 * @param {*} g 小孩的胃口
 * @param {*} s 拥有的 Cookie 大小
 * @returns 
 */
let findContentChildren = function (g, s) {
    // 排序（升序）
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    // 存放满足小孩的人数
    let count = 0;
    // 双指针
    let i = 0;
    let j = 0;
    while (i < g.length && j < s.length) {
        // 小孩的需求
        let need = g[i];
        // 拥有的 Cookie
        let cookie = s[j];
        if (cookie >= need) {
            /**
             * 拥有的 cookie 可以满足或者超过小孩的需求
             * 此时：该小孩的需求已经得到了满足了，接着判断下一个小孩
             * 由于数组是升序的，故下一个小孩的需求肯定比下一个小孩大
             * 因此 j++
             *  */
            // 记录满足小孩的人数
            count++;
            // 下一个小孩
            i++;
            // 加大拥有的 cookie
            j++;

        } else {
            //   满足不了该小孩的需求，移动下一个 cookie （将 cookie 加大）
            j++;
        }
    }
    return count;
}
let res = findContentChildren([1, 2, 3], [1, 4, 4]);
console.log(res);