function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        let j = i - 1
        
        for (j; ((j >= 0 && arr[j] > val)) ; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = val;
    }
    return arr;
}

module.exports = insertionSort;