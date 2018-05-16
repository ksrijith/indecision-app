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
        const cityMessages = this.cities.map((city) => this.name + ' has lived in: ' + city);
        cityMessages.forEach((cityMessage) => {
            console.log(cityMessage);
        });
    }
};

//user.printPlacesLived();

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply () {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};


console.log(multiplier.multiply());