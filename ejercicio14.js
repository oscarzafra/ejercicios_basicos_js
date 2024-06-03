const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    const result = {};
    for (const element of list) {
      if (result[element]) {
        result[element] += 1;
      } else {
        result[element] = 1;
      }
    }
    console.log(result);
  }

  repeatCounter(words);