function same(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            let indexValue = arr2.indexOf(arr1[i] ** 2);
            if (indexValue === -1) {
                return false;
            }
            console.log(arr2);
            arr2.splice(indexValue, 1);
        }
        return true;
    }
}
let result = same([1, 2, 3, 4], [1, 16, 4, 9]);
console.log(result);
