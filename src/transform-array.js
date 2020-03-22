module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error;
    const resultArr = [];
    const arrLength = arr.length
    for (let i = 0; i < arrLength; i += 1) {
        if (arr[i] === '--discard-next') {
            if (i + 1 <= arrLength - 1) {
                i += 1;
            }
        } else if (arr[i] === '--discard-prev') {
            if (i - 1 >= 0) {
                resultArr.pop();
            }
        } else if (arr[i] === '--double-next') {
            if (i + 1 <= arrLength - 1) {
                resultArr.push(arr[i + 1]);
            }
        } else if (arr[i] === '--double-prev') {
            if (i - 1 >= 0) {
                resultArr.push(arr[i - 1]);
            }
        } else {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
};
