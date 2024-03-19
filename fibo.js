function fibs(number) {
  let arr = [0];
  let counter = 1;
  for(let i=0 ; i<number; i++) {
   arr.push(counter);
    counter = counter + arr[i];
  }
  return arr;
  }


  let counter = 0;
  let arr = [0, 1];

  function fibsRec(number) {
    
    if(number === 1) {
        return arr;
    }


    let newNumber = arr[counter] + arr[counter+1];
    counter++
    arr.push(newNumber);
    return fibsRec(number-1);
  }

  console.log(fibs(8))
  console.log(fibsRec(7))

  let array = [8, 1, 3, 0, 6, 4, 2, 7];

  function mergeSort(array) {
    if (array.length <= 1) {
        return array;
        //8
        //1
    }
    
    let half = Math.ceil(array.length/2);
    let firstHalf = array.slice(0, half);
    //[8, 1, 3, 0]
    //[8, 1] [3, 0]
    //[8] [1] [3] [0]
    let secondHalf = array.slice(half, array.length);
    //[6, 4, 2, 7]
    //[6, 4] [2, 7]
    //[6] [1] [2] [7]

    let sortedFirstHalf = mergeSort(firstHalf);
    let sortedSecondHalf = mergeSort(secondHalf);

    return merge(sortedFirstHalf, sortedSecondHalf)
    

  }

  function merge(sortedFirstHalf, sortedSecondHalf) {
    let sortedArray = [], leftIndex = 0, rightIndex = 0;
    while(leftIndex<sortedFirstHalf.length && rightIndex<sortedSecondHalf.length) {
      if(sortedFirstHalf[leftIndex]<sortedSecondHalf[rightIndex]) {
        sortedArray.push(sortedFirstHalf[leftIndex])
        leftIndex++
      }
      else {
        sortedArray.push(sortedSecondHalf[rightIndex])
        rightIndex++
      }

    }
    return sortedArray
                      .concat(sortedFirstHalf.slice(leftIndex))
                      .concat(sortedSecondHalf.slice(rightIndex));
  }

  console.log(mergeSort(array))