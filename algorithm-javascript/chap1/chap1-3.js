var remove = function (array, index) {
    var tempArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i < index)
            tempArray.push(array[i]);
        if (i > index)
            tempArray.push(array[i]);
    }
    return tempArray;
};
var scores1_3 = [90, 70, 50, 80, 60, 85];
scores1_3 = remove(scores1_3, 4);
console.log(scores1_3);
