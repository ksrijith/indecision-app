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

user.printPlacesLived();

