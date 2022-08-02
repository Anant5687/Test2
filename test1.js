//FInd min and max value from an array

function MinAndMaxVal(arr) {
    let minVal = arr[0]
    let maxVal = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i]
        }
        if (arr[i] > maxVal) {
            maxVal = arr[i]
        }
    }
    return {minVal, maxVal}
}
console.log(MinAndMaxVal([1, 345, 234, 21, 56789]))