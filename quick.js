/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length -1){

    let p = arr[start]
    let idx = start;

    for (let i = start + 1; i <= end; i++) {
        if (p > arr[i]) {
            idx++;
            [arr[idx], arr[i]] = [arr[i], arr[idx]]
        }
    }

    [arr[start], arr[idx]] = [arr[idx], arr[start]];
    return idx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (right > left) {
        const pIdx = pivot(arr, left, right);
        quickSort(arr, left, pIdx - 1);
        quickSort(arr, pIdx + 1, right);
    }
    return arr;
}

module.exports = {quickSort, pivot};