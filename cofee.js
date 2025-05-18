const {EventEmitter} = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = (name) => {
    console.log(`Kopi ${name} sudah dibuat`);
};
const priceCoffee = (price) => {
    console.log(`Price : ${price}`);
};


const onOrderedCoffe = ({name,price}) => {
    makeCoffee(name);
    priceCoffee(price);
}
const coffeeTubruk = {
    name : 'tubruk',
    price : 5000
}

myEventEmitter.on('coffee',onOrderedCoffe);
myEventEmitter.emit('coffee',coffeeTubruk);






module.exports = coffeeTubruk;