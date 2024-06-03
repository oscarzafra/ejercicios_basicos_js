const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const cualities in alien) {
    console.log(`La propiedad ${cualities} tiene como valor: ${alien[cualities]}`);
}