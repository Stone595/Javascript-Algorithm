

describe('Sorting algorithm', ()=> {
  it('Should be equal to 1, 2, 3, 4', ()=> {
    let notArr = [4,2,1,3];
    customSort(notArr);
    expect(notArr).toEqual(notArr.sort())

  });

  it('Should be equal to 1,3,4,5,7', ()=> {
    let notArr = [7,5,3,4,1];
    let sortedArr = [...notArr].sort();
    let checker = 0;
    customSort(notArr);
    for(let i = 0; i < notArr.length; i++){
      if(notArr[i] != sortedArr[i]){
        checker += 1; 
      }
    }
    expect(checker).toEqual(0);
  })
  it('Should be equal to 10,11,12,13,14', ()=> {
    let notArr = [10, 14, 13, 12, 11];
    let sortedArr = [...notArr].sort();
    let checker = 0;
    customSort(notArr);
    for(let i = 0; i < notArr.length; i++){
      if(notArr[i] != sortedArr[i]){
        checker += 1; 
      }
    }
    expect(checker).toEqual(0);
  })
  
  it('Should be equal to -1', ()=> {
    let notArr = [];
    expect(customSort(notArr)).toEqual(-1);
  })














})















