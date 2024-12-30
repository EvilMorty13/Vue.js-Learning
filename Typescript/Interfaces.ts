interface PersonInterface {
    name: string;
    age: number;
}

const person: PersonInterface = {
    name: "Alex Smith",
    age: 30
};

console.log(person);

interface User {
    email : string;
    name? : string;
}

const user: User={
    email: "alex@example.com"
}

console.log(user)



interface Employee extends PersonInterface{
    department: string;
}

const empolyee: Employee={
    name: "Alex Smith",
    age: 30,
    department: 'IT'
}


console.log(empolyee)