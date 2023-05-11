function merge(arr1, arr2) {
    const res = [];
    let i = 0, j = 0;
    
    while ((arr1.length > i) && (arr2.length > j)) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }

    while (arr1.length > i) {
        res.push(arr1[i]);
        i++
    }

    while (arr2.length > j) {
        res.push(arr2[j]);
        j++
    }

    return res;
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const middle = Math.floor(arr.length / 2);
    const arr1 = mergeSort(arr.slice(0, middle));
    const arr2 = mergeSort(arr.slice(middle));
    return merge(arr1, arr2);
}

module.exports = { merge, mergeSort};