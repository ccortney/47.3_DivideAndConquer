function sortedFrequency(arr, target) {
    first = findFirst(arr, target);
    if (first == -1) {
        return -1;
    }
    last = findLast(arr, target);
    return last - first + 1;
}

function findFirst(arr, target, leftIdx=0, rightIdx=arr.length - 1) {
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        if ((middleIdx == 0 || arr[middleIdx - 1] < target)  && arr[middleIdx] == target) {
            return middleIdx;  
        }
        else if (arr[middleIdx] < target) {
            leftIdx = middleIdx + 1;
            return findFirst(arr, target, leftIdx, rightIdx);
        }
        else {
            rightIdx = middleIdx - 1;
            return findFirst(arr, target, leftIdx, rightIdx);
        }
    }
    return -1;
}

function findLast(arr, target, leftIdx=0, rightIdx=arr.length - 1) {
    if (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        if (arr[middleIdx] === target && (middleIdx === arr.length -1 || arr[middleIdx + 1] > target)) {
            return middleIdx;  
        }
        else if (arr[middleIdx] > target) {
            rightIdx = middleIdx - 1;
            return findLast(arr, target, leftIdx, rightIdx);
        }
        else {
            leftIdx = middleIdx + 1;
            return findLast(arr, target, leftIdx, rightIdx);
        }
    }
    return -1;
}

module.exports = sortedFrequency