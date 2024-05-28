const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let suma = 0;
  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i];
  }
  const element = suma / numberList.length;
  return element;
}

console.log(average(numbers));