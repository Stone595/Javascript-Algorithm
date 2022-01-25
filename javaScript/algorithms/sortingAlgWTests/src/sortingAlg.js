




function customSort(arr) {
  if(!arr || arr[0]== undefined){
    return -1
  }
  for (let index = 0; index < arr.length; index++) {
    let minItem = arr[index];
    let minItemIndex = index;
    for (let searchIndex = index + 1; searchIndex < arr.length; searchIndex++) {
      const item = arr[searchIndex];
      if(item < minItem){
        minItem = item;
        minItemIndex = searchIndex
      }
    }
    const temp = arr[index]
    arr[index] = minItem; 
    arr[minItemIndex] = temp;

  }


return arr; 



}

























