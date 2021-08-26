var sideA = document.querySelector('#firstAngle')
var sideB = document.querySelector('#secondAngle')
var sideC = document.querySelector('#thirdAngle')
var btn_checkTr = document.querySelector('#triangle-check')
var output = document.querySelector('.output')


function isTriangle(){

    var sum = Number(sideA.value) + Number(sideB.value) + Number(sideC.value)

    if(sum === 180){
        output.innerText = 'Is a triangle';
    }else{
        output.innerText = 'Not a triangle';
    }
}


btn_checkTr.addEventListener("click", isTriangle);