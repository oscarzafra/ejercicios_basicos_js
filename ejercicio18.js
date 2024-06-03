const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}];

for (let i = 0; i < placesToTravel.length; i++) {
    if (placesToTravel[i].id === 11  || placesToTravel[i].id === 40) {
        placesToTravel.splice(i,1);
        i--;
    }
}

console.log(placesToTravel);

// En este bucle estamos diciendo que si los "id" son 11 y/o 40, con el splice eliminamos los elementos del array "placesToTravel" que existen con dicho "id", como es el caso de Japan y Santander.