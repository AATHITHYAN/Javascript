function refactored(arr1, arr2)
{
    if(arr1.length !== arr2.length)
    {
        return false;
    }
    let freq1 = {}, freq2 = {};
    for(let freq of arr1)
    {
        freq1[freq] = (freq1[freq] || 0) + 1;
    }
    for(let freq of arr2)
    {
        freq2[freq] = (freq2[freq] || 0) + 1;
    }
    console.log("Frequency 1: ", freq1);
    console.log("Frequency 2: ", freq2);
    for(let val in freq1)
    {
        if(!(val ** 2 in freq2))
        {
            return false;
        }
        if(freq2[val ** 2] !== freq1[val])
        {
          return false;
        }
    }
  return true;
}
let result = refactored([1, 2, 3, 4], [1, 4, 16, 9]);
console.log("Final Result: ", result);
