// setTimeout(function(){
//     console.log("shrinu");
// },2000)  // THis code sets a timeout and executes the code after that amount of time

const shrinu = function() {
    console.log('Shrinusn')
};
setTimeout(shrinu, 2000);



function changeText(){
    const changeText = document.querySelector('h1')
    changeText.innerHTML = "This text has changed"
}
const changeMe = setTimeout(changeText, 2000);
clearTimeout
// clearTimeout(changeMe);

const button = document.querySelector('#stop');
button.addEventListener('click', function(){
    clearTimeout(changeMe);
    console.log("STOP");
})