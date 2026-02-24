const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');
const header = document.querySelector('h1');


function changeText(){
    header.innerHTML = "The text is changed"
    console.log("the text is changed");
}


startBtn.addEventListener('click', function(){
    console.log("Started");
    setTimeout(changeText, 2000);
})

function resetText(){
    header.innerHTML = "The text has reset"
    console.log("The text is resetted")
}

resetBtn.addEventListener('click', function(){
   const textReset = setTimeout(resetText, 2000);
})
