//For finding the Closest element

function ClosestNoOfSumOfTwoEle(arr, x) {
    let maxSum = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) <= x) {
                if ((arr[i] + arr[j]) > maxSum) {
                    maxSum = (arr[i] + arr[j])
                }
            }
        }
    }

    return {maxSum}

}
console.log(ClosestNoOfSumOfTwoEle([10, 22, 28, 29, 30, 40], 54))