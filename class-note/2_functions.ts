// 함수 파라미터 타입정의
function add(a: number, b:number) {
    return a+b;
}

// 함수 리턴 타입 정의
function plus(): number {
    return 99;
}

// 함수의 옵셔널 파라미터
function log(a:string, b?:string, c?:string) {
}
log('a')
log('a', 'b')
