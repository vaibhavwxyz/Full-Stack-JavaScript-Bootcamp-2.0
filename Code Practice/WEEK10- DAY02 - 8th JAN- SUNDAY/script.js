// alert("hello")

let myHeros = ["thor", "spiderman", "ironman"]
let dcHeros = ["batman", "superman", "flash"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.vaibhav = function(){
    console.log(`Vaibhav is present in all objects`);
}

Array.prototype.heyVaibhav = function(){
    console.log(`heyVaibhav is present in all objects`);
}

myHeros.vaibhav()


// INHERITANCE
const User = {
    name: "sai maddilwar",
    email: "topuser@gmail.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TSAssistant = {
    makeAssignment: 'JS assigment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// GOAL: GET TRUE-LENGTH OF STRING
let myName = 'vaibhav   '

String.prototype.truelength = function(){
    console.log(`true length is: ${this.trim().length}`);
}
