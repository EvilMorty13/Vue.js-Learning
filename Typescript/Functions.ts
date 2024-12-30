function add(a:number,b:number): number{
    return a+b;
}

console.log(add(4,5))

//Name is optional
function greet(name?: string): void {
    console.log(`Hello, ${name ?? 'world'}!`);
}

console.log(greet('Alex'))


function repeat(text: string,times:number=3):string{
    return text.repeat(times)
}

console.log(repeat("It is cold"))

