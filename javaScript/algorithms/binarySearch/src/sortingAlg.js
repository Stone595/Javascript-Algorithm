
function linearFind(arr, wantedItem) {
  let i = 0
  while(i < arr.length){
    if(arr[i] == wantedItem){
      return true; 
    } else {
      i += 1; 
    }
  }

  return -1; 
}


function binaryFind(array, number) {
  let startingIndex = 0;
  let endingIndex = array.length -1; 
  while (startingIndex <= endingIndex) {
    let middle = Math.floor((startingIndex + endingIndex) /2)
    if(number === array[middle]){
      return true;
    }
    if(number > array[middle]){
      startingIndex = middle +1 ;
    }
    if(number < array[middle]){
      endingIndex = middle -1;
    }
    else{
      console.log('trying again')
    }
  }
  return -1
}
