class Person {
    firstName: string;
    lastName: string;
    age: number

    constructor(firstName: string,lastName: string,age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullname():string{
        return `${this.firstName} ${this.lastName}`
    }
}

const newPerson = new Person("Kylian","Mbappe",26);
console.log(newPerson.fullname())
console.log(newPerson); 
