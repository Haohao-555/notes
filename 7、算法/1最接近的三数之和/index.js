/**
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 */
let threeSumClosest = function (nums, target) {
    // 判断数组的个数 
    if (nums.length == 3) {
        // 返回该数组的和
        return nums.reduce((acc, cur) => acc + cur, 0);
    }

    // 对数组进行排序(升序)  关键
    nums.sort((a, b) => a - b)

    let min = Infinity; // 无穷大
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        // 左指针
        let left = i + 1;
        // 右指针
        let right = nums.length - 1;
        while (left < right) {
            // 计算三个数的值
            let sum = nums[i] + nums[left] + nums[right];
            // 计算与目标值的绝对差
            let diff = Math.abs(sum - target);
             // 更新最小值
            if (diff < min) {
                min = diff;
                res = sum;
            }  
            // 判断当前值是偏大还是偏小
            if (sum > target) {
                // 偏大，将当前值变小（右指针后退一步）
                right--;
            } else if (sum < target){
               left++;
            } else {
                // 当前值刚好等于目标值，直接返回
                return sum;
            }
        }
    }
    return res;
}
let res = threeSumClosest([-1,2,1,-4],-1);
console.log(res);







