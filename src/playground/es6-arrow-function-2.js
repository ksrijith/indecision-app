const add = (a, b) => {
    return a + b;
}

console.log(add(55, 1, 1000));

const user = {
    name: 'Srijith', 
    cities: [
        'Bengaluru',
        'Waukesha',
        'Tokyo'
    ],
    printPlacesLived () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in: ' + city);
        });
    }
};

user.printPlacesLived();