function Person1 (name, age) {
    this.name = name;
    this.age = age;
}
const ji = new Person1('ji', 30);
console.log(ji)

//ES6
class Person2 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const jy = new Person2('jayden', 32);
console.log(jy)