function maximumCount(arr) {
  const binarySearchNegative = () => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] < 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };
  
  const binarySearchPositive = () => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] <= 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return arr.length - left;
  };

  return Math.max(binarySearchNegative(), binarySearchPositive());
}

const nums = [-3, -2, -1, 0, 0, 1, 2];
console.log(maximumCount(nums));
