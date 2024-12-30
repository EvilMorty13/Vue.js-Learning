function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(42));      
console.log(identity<string>("Hello"));
console.log(identity<boolean>(true));   

interface KeyValue<K, V1, V2> {
    key: K;
    value1: V1;
    value2: V2;
}

const p: KeyValue<string, number , number> = { 
    key: "id", 
    value1: 111,
    value2:222 
};

console.log(p);



