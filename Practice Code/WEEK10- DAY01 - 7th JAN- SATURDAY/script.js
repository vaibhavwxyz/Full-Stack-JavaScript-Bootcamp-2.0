console.log(this);

const object = {
    rocket: '🚀',
    home: '🏡'
}

for (k in object){
    console.log(k);
}

// string, number, bigint, boolean, null, undefine, symbol

const vehicle = {
    car: 'BMW',
    fuel: 2,
    config: {
        owner: 'vaibhav'
    }
}

vehicle.fuel = 200
vehicle['year'] = 2000

for (k in vehicle){
    console.log(k);
}

// PART 2
const books = new Object() //constructor
books.comic = 'marvel'
books.price = '299' // we can't define books.1stPrice

console.log(books);


// PART 3
const powers = {
    fly: true,
    cordinate: Math.random() + 2
}

const hero = Object.create(powers)
console.log(hero);
console.log(hero.cordinate);
console.log(Object.getPrototypeOf(hero));


// PART 4
const fruit = Object.create({})
fruit.red = "apple"
console.log(fruit);
Object.defineProperty(fruit, 'yellow', {
    // icon: 'banana'
    get: () => 'banana',
    enumerable: true
})

console.log(fruit.yellow);
console.log(Object.getPrototypeOf(fruit));
console.log(fruit);

for(k in fruit){
    console.log("value is: ", k);
}


// PART 5
const objects = {
    comics: 'marvel',
    pen: '',
    notebook: '',
    printPen: function(){
        this.pen += 'reynold';
        console.log("this is inside the printPen: ", this);
    },
    printNotebook: () => {
        this.notebook += 'classmate'; //this will not updated the value because of arrow function does't know 'this' concept.
        console.log("this is inside the printNotebook function: ", this);
    }
}

console.log("this is printPen: ", objects.printPen());
console.log("this is printNotebook: ", objects.printNotebook());

console.log(objects.printPen().printPen().printPen());