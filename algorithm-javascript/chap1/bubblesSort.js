var bubblesSort = function (nums) {
    var temp;
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    console.log(nums);
};
bubblesSort([2, 6, 3, 1, 9, 17, 10, 18, 24, 21]);
// [0] [1]
// [1] [2]
// [2] [3]
