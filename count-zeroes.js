function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];
        if (middleVal == 1) {
            leftIdx = middleIdx + 1;
            if (arr[leftIdx] == 0) {
                return arr.length - leftIdx;      
            }
        }
        else {
            rightIdx = middleIdx - 1;
        }
    }
    if (arr[0] == 0) {
        return arr.length - 1;
    }
    if (arr[arr.length-1] == 1) {
        return 0;
    }
}

module.exports = countZeroes