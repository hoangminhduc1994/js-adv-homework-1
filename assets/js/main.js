let removeDuplicates = (arr) => {
    const elementCount = {};
    
    arr.forEach(element => {
      elementCount[element] = (elementCount[element] || 0) + 1;
    });
    
    const uniqueElements = arr.filter(element => elementCount[element] === 1);
    
    return uniqueElements;
  }
  
  const inputArray = [1, 2, 3, 3, 4, 4, 5];
  const resultArray = removeDuplicates(inputArray);
  console.log('Mảng sau khi loại bỏ các phần tử trùng lặp:', resultArray);
  