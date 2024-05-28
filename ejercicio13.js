const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, name) {
    const position = nameList.indexOf(name);
    console.log(position);
  }

  nameFinder(names, "Bruce");