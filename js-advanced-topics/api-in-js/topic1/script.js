const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();
xhr.open('GET', 'requestUrl')
xhr.send();
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
}
xhr.send();
