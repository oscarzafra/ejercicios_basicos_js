const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  let contador = 0;
  for (const element of list) {
    if (typeof element === "string") {
        contador += element.length;
  } else {
        contador += element;
  }
}
const average = contador / list.length;
console.log(average);
}

averageWord(mixedElements);