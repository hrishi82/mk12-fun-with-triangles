const sides = document.querySelectorAll('#sides')
const checkARBtn = document.querySelector('.check-ar') 
const output = document.querySelector('.output-Box')


function checkArea(){
    var area = (1/2)*(Number(sides[0].value) *  Number(sides[1].value))
    output.innerText = "The area of the triangle is " + area+'cm²';
}

function checkVal(){
    if(Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0 ){
        output.innerText = "Please enter correct values";
      }else{
        checkArea()
      }
}

checkARBtn.addEventListener('click', checkVal )