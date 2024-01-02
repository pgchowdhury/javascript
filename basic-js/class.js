/*
* Class is a program-code template for creating objects.
* Those objects will have state (variables) and behavior (methods) inside it
* class MyClass {
*   constructor(){...}
*   myMethod() {...}    
*   }
*   
*   let myObj = new MyClass();
*/

class ToyotaCar {

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

// Create the object form ToyotaCar class
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");

let lexus = new ToyotaCar();
lexus.setBrand("lexus");    

/*
*   Constructor method is:
*       Unlike other language the name of the constructor method will be always constructor
*       Automatically Invoked by New
*       Initializes Objects
*/

class HondaCar {

    constructor(brand, mileage) { // constractor method to set a attribute
        this.brand = brand;
        this.mileage = mileage;
        console.log(`Creating new object ${this.brand}`);
    }

    start() {
        console.log("Start the car");
    }

    stop() {
        console.log("Stop the car");
    }
}

let mycity = new HondaCar("city", 12);
let myaccord = new HondaCar("accord", 10);

/*
* Inherritence in JS
*   Inherritence is passing down the properties & methods from parent class to child class
*   class Parent {
*   }
*   class Child extends Parent {
*   }
*
*   If Child and Parent have the same methods then Child method will be used [Method Overridding]
*/

class Person {

    constructor() {
        console.log("enter parent constructor");
        this.species = "Home Sapiens";
        console.log("exit parent constructor");
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}

class Engineer extends Person {
    work() {
        console.log("Build Something. Solve Problem");
    }
}

let dipankarObj = new Doctor();
let jiyaObj = new Engineer();

/*
*   Super Keyword
*   The super keyword is used to call the constructor of it's parent class to access the parent's 
*   properties and methods
*   super(args) // calls parent's constructor
*   super.parentMethod(args)
*/

class SoftwareEngineer extends Person {

    constructor(branch) {
        console.log("enter child constructor");
        super(); // to invoke parent class constructor
        this.branch = branch;   
        console.log("exit child constructor");
    }

    work()  {
        super.eat();
        console.log("Develop new softeare");
    }
}

let prosenjitObj = new SoftwareEngineer("JavaScript");

/*
*   Let's Practice
*   Qs. You are creating a website for your college. Create a class User with 2 properties, name and 
*   email. It also has a method called viewData() that allows user to view website data.
*/
let data = "Secret Data"
class User {
    constructor(name, email){
        this.name = name;
        this.email  = email;
    }

    viewData() {
        console.log("Data =", data);
    }
}

let student1 = new User("Prosenjit Ghosh Chowdhury", "pgchowdhury@gmail.com");
let student2 = new User("Sushmi Ghosh Chowdhury", "sgchowdhuryin@gmail.com");
let teacher1 = new User("Mahaswata Sengupta", "maha@gmaiil.com");

/*
*   Let's Practice
*   Qs. Create a new class called Admin which inherits from User. Add a new method call editData 
*   to Admin that allows it to edit the website data
*/

class Admin extends User {
    
    editData() {
        data = "some new value";
    }
}

let adminuser = new Admin("Sara Ghosh Chowdhury", "sarundani@gmail.com");

/*
*   Error Handling: try-catch block
*   try {
*       ...normal code
*   } catch(err) { // err is the error object
*       console.log(err);
*       ...handling error
*   }
*/

