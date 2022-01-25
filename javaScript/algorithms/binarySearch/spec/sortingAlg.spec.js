describe("Binary Search", function() {

  it("should find 69", function() {
    let unorderedArray = Array.from({ length: 100}, () => Math.floor(Math.random() * 100));
    unorderedArray.push(69)
    unorderedArray.sort((a, b) => { return a - b})
    // linearFind(unorderedArray, 69);
    //demonstrates use of custom matcher
    expect(binaryFind(unorderedArray, 69)).toBe(true);
  });
  it("should find 1", function() {
    let unorderedArray = Array.from({ length: 100}, () => Math.floor(Math.random() * 100));
    unorderedArray.push(1)
    unorderedArray.sort((a, b) => { return a - b})
    
    //demonstrates use of custom matcher
    expect(binaryFind(unorderedArray, 1)).toBe(true);
  });
  it("should find 70", function() {
    let unorderedArray = Array.from({ length: 100}, () => Math.floor(Math.random() * 100));
    unorderedArray.push(70)
    unorderedArray.sort((a, b) => { return a - b})
    
    //demonstrates use of custom matcher
    expect(binaryFind(unorderedArray, 70)).toBe(true);
  });
  it("should find 420", function() {
    let unorderedArray = Array.from({ length: 100}, () => Math.floor(Math.random() * 100));
    unorderedArray.push(420)
    unorderedArray.sort((a, b) => {return  a - b})
    
    //demonstrates use of custom matcher
    expect(binaryFind(unorderedArray, 420)).toBe(true);
  });
  it("should return -1", function() {
    let unorderedArray = Array.from({ length: 100}, () => Math.floor(Math.random() * 100));
    unorderedArray.sort((a, b) => {return  a - b})
    //demonstrates use of custom matcher
    expect(binaryFind(unorderedArray, 100000)).toEqual(-1);
  });

});

describe('linear search', function () {
  it("should return -1", function() {
    let unorderedArray = Array.from({ length: 100}, () => Math.floor(Math.random() * 100));

    unorderedArray.sort((a, b) => {return  a - b})

    expect(linearFind(unorderedArray, 6000)).toEqual(-1);
  });
  it("should find 69", function() {
    let unorderedArray = Array.from({ length: 100}, () => Math.floor(Math.random() * 100));
    unorderedArray.push(69)
    unorderedArray.sort((a, b) => {return  a - b})

    expect(linearFind(unorderedArray, 69)).toBe(true);
  });

  it("should find 1", function() {
    let unorderedArray = Array.from({ length: 100}, () => Math.floor(Math.random() * 100));
    unorderedArray.push(1)
    unorderedArray.sort((a, b) => {return  a - b})
    
    expect(linearFind(unorderedArray, 1)).toBe(true);
  });

  it("should find 70", function() {
    let unorderedArray = Array.from({ length: 100}, () => Math.floor(Math.random() * 100));
    unorderedArray.push(70)
    unorderedArray.sort((a, b) => {return  a - b})
    
    expect(linearFind(unorderedArray, 70)).toBe(true);
  });

  it('should return true for 420', function(){
    let unorderedArray = Array.from({ length: 100}, () => Math.floor(Math.random() * 100));
    let noDup= [...new Set(unorderedArray)];
    unorderedArray.push(420)
    
    noDup.sort((a, b) => {return  a - b})

    expect(linearFind(unorderedArray, 420)).toBe(true);
  });
  
  





});
