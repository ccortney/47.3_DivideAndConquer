function findRotatedIndex(arr, target) {
    let low = 0;
    let high = arr.length -1;
    let mid = Math.floor((low + high)/2);
    if (arr[mid] == target) {
        return mid
    }
    else {
        lowerHalf = findIndex(arr, target, low, mid - 1)
        upperHalf = findIndex(arr, target, mid + 1, high) 
    }
    if (arr[lowerHalf] == target){
        return lowerHalf;
    }
    else if (arr[upperHalf] = target) {
        return upperHalf;
    }
    else {
        return -1;
    }
}   

function findIndex(arr, target, low, high) {
    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        if (arr[mid] < target) {
            low = mid + 1;
        }
        else if (arr[mid] > target) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

module.exports = findRotatedIndex