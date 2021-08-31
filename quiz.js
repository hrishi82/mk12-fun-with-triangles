const quizform = document.querySelector(".quiz-form")
const submitanswerBtn = document.querySelector('#submit-answer-btn') //querySelectorAll in video
const output = document.querySelector('.output') 

const correctAnswers = ["90°", "right angled" ,"one right angle"];


function calculateScore(){
    var score = 0;    
    var indexcounter = 0;
    
    var formData  = new FormData(quizform);
    for(let val of formData.values()){
        if (val === correctAnswers[indexcounter]){
            score +=1;
        }
        indexcounter +=1;
    }

    output.innerText = "You scored: " + score;
    
}



submitanswerBtn.addEventListener('click', calculateScore);