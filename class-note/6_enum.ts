enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log('yes')
    }
    if(answer === Answer.No){
        console.log('no')
    }
}

askQuestion(Answer.Yes)
// askQuestion('Y') 에러