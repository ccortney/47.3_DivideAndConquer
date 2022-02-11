function findFloor(arr, target, low = 0, high = arr.length - 1) {
    if (low <= high) {
        let mid = Math.floor((low + high)/2);
        if (arr[mid] < target && (arr[mid + 1] >= target || mid == arr.length -1)) {
            return arr[mid];
        }
        else if (arr[mid] >= target) {
            return findFloor(arr, target, low, mid - 1);
        }
        else {
            return findFloor(arr, target, mid + 1, high);
        }
    }
    return -1;
}

module.exports = findFloor