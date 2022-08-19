var bubblesSort = function (nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    console.log(nums);
    return nums;
};
bubblesSort([2, 6, 3, 1, 9, 17, 10, 18, 24, 21]);
