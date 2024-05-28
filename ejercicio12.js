const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    const unico = [];
    for (const element of list) {
        if (!unico.includes(element)) {
            unico.push(element);
        }
    }
    console.log(unico);
  }

  removeDuplicates(duplicates);