// document.getElementById('image1').onclick = function(){
//     alert('Image1 is clicked')
// }

//Events types => type, timestamp, defaultPrevented,target,toElement,srcElement

// document.getElementById('images').addEventListener('click', function(e){
//     console.log('clicked inside the ul');
// })
// document.getElementById('image1').addEventListener('click', function(e){
//     console.log('Image1 clicked');
//     e.stopPropagation()
// })
// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('google clicked');
//     e.stopPropagation()
// })

//Hiding the images task in events
document.querySelector('#images').addEventListener('click', function(e){
    console.log(e);
    if(e.target.tagName === 'IMG'){
        let targetImage = e.target.parentNode;
        targetImage.remove();
        console.log(e.target.id);
    }
    
    
})

