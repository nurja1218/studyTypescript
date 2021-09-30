function getText<T>(text: T): T {
    return text;
}
  
getText<string>('hi');
getText<number>(10);
getText<boolean>(true);

//제네릭 인터페이스
interface GenericLogTextFn {
    <T>(text: T): T;
}

function logText<T>(text: T): T {
    return text;
}

let myString: GenericLogTextFn = logText; // Okay


interface Dropdown<T> {
    value: T;
    selected: boolean;
}

// const obj: Dropdown<number> = { value: 'abc', selected: false};

// generic type제한
