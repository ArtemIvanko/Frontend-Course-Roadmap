const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 440, 10, 11, 12, 13, 14];

const removeElement = (arr, num) => {
  const result = arr.filter((item) => item !== num);

  return result;
};

removeElement(arr, 440);