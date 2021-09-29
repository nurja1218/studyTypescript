interface User {
    name: string;
    age: number;
    address: string;
    level: number;
}

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction{
    (x: number, y: number): number;
}

let sum: SumFunction;
sum = function(a:number, b:number): number {
    return a+b;
}

// 딕셔너리 패턴
interface StringRegexDictionary{
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}
// obj['cssFile'] = a.css

Object.keys(obj).forEach(function(value) {})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string[];
}

const teamone: Developer = {
    language: ['vanilla', 'python', 'react'],
    name: 'jayden',
    age: 32
}