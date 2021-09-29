// 유니온 타입
function log(context: string | number) {
    console.log(context);
}

log('ha');
log(100);

interface Student {
    grant: string;
    name: string;
    age: number;
}

interface Engineer {
    spec: string[];
    name: string;
    age:number;
}

function willog1(willoger: Student | Engineer) {
    willoger.name
    willoger.age
    // 에러
    // willoger.spec 
    // willoger.grant
}
// 파라미터의 선택지 가능
willog1({name: '1', age: 1, grant: 'a'})
willog1({name: '1', age: 1, spec: ['a']})


// 인터섹션
function willog2(willoger: Student & Engineer) {
    willoger.name
    willoger.age
    willoger.spec
    willoger.grant
}
// 파라미터의 선택지 없음
willog2({name: '1', age: 1, spec: ['a'], grant: 'a'})