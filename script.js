const rateBoxes = document.querySelectorAll('.rate');
const rateDisplay = document.getElementById('ratedvalue');
const submitBtn = document.querySelector('.btn');
let rateVal ;
console.log(rateDisplay);
rateBoxes.forEach(function(rateBox) {
    rateBox.addEventListener('click', function(){
        rateBoxes.forEach(function(rateBox){
            rateBox.classList.remove('active');
        })
        rateBox.classList.add('active');
        rateVal = rateBox.textContent;
        rateDisplay.innerHTML = rateVal;
    })
})

submitBtn.addEventListener('click', function(){
    location.href = "thanks.html";
})