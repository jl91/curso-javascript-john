class Person {

    name;
    age;
    doc;
    
    constructor(name, age,doc){
        this.name = name;
        this.age = age;
        this.doc = doc;
    }

    talk(){
        console.log(`Falando como ${this.name}`);
    }
    
}

const person = new Person();
person.name = "john";

const person2 = new Person();
person2.name = "Felipe";

console.log(person);

console.log(person2);

console.log(person);

person.talk();

person2.talk();


const persons = [
        new Person("John", 31, 123456789),
        new Person("Felipe", 31, 123456789),
        new Person("Mayra", 31, 123456789),
        new Person("Neneko", 31, 123456789),
        new Person("Jatobá", 31, 123456789),
];


persons.forEach(function(item) {
    console.log(item.name)
});