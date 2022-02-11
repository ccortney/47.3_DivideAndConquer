function findRotationCount(arr, low = 0, high = arr.length -1) {
    let mid = Math.floor((low + high)/2);
    if (high < low) return 0;

    if (arr[mid] < arr[mid - 1] && mid > low) {
        return mid;
    }
    
    if (arr[mid + 1] < arr[mid] && mid < high) {
        return mid + 1;
    }
    
   

    if (arr[low] < arr[mid]) {
        return findRotationCount(arr, mid + 1, high)    
    }
    
    return findRotationCount(arr, low, mid - 1)
}



module.exports = findRotationCount