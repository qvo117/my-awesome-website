/*Typescript is a superset of JS created by MS, allows us to code in a typed safety and organized manner*/
/*To install typescript, run npm install -g typescript*/
/*To create a typescript project, run npm init -y in the folder of our project*/
/*Defining vars just like in JS but must declare the type after the var name and colon*/
//let myName: string = "Quynh Vo";
//let myAge: number = 21;
//let lovesCoding: boolean = true;
/*Cannot change the type of var later as in JS*/
//let myVar = "Hello World";
//myVar = 21;
/*Print out the vars*/
//console.log(myName);
//console.log(myAge);
//console.log(lovesCoding);
/*Important commands*/
//To compile a typescript file use tsc command followed by the filename; to create the javascript file
//To run the JS file, uses node filename
/*An array is a collection of elements of the same type*/
var myArray = ["Cat", "Dog"];
myArray.push("Giraffe");
console.log(myArray);
/*Enums is an extension to the standard datatypes (make our own data type) that only allow values from our pre-determined set*/
var Days;
(function (Days) {
    Days[Days["MONDAY"] = 0] = "MONDAY";
    Days[Days["TUESDAY"] = 1] = "TUESDAY";
    Days[Days["WEDNESDAY"] = 2] = "WEDNESDAY";
    Days[Days["THURSDAY"] = 3] = "THURSDAY";
    Days[Days["FRIDAY"] = 4] = "FRIDAY";
    Days[Days["SATURDAY"] = 5] = "SATURDAY";
    Days[Days["SUNDAY"] = 6] = "SUNDAY";
})(Days || (Days = {}));
;
var dayOfWeek = Days.FRIDAY; //an index of the enum array
console.log(Days[dayOfWeek]); //print the value of this index
//A function that has a Person type as its argument is an example of a use-case of an interface
function sayHello(particularPerson) {
    console.log("Hello, " + particularPerson.name);
}
//Creates a Person typed object
var me = {
    name: "Quynh Vo",
    age: 21
};
//Call the function
sayHello(me);
/*
//A class
class Person {
    private name: string;
    private age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }


    getAge () {
        return this.age;
    }

    getName() {
        return this.name;
    }
}

let me = new Person( "Quynh Vo", 21);
console.log("Hello, " + me.getName())*/
