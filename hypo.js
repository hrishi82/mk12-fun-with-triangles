const sides = document.querySelectorAll('#sides')
const checkHypoBtn = document.querySelector('.check-hypo') 
const output = document.querySelector('.output-Box')


function sumofsquares(){
    var sum  = Number(sides[0].value**2) +  Number(sides[1].value**2)
    return sum
}


function checkhypotenuse(){
    var sumofsq = sumofsquares();
    output.innerText = "Length of hypotenuse: " + Math.sqrt(sumofsq);
}

function checkVal(){
    if(Number(sides[0].value) <= 0 || Number(sides[1].value) <= 0 ){
        output.innerText = "Please enter correct values";
      }else{
        checkhypotenuse()
      }
}


checkHypoBtn.addEventListener('click', checkVal)