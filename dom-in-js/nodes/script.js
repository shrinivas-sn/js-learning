const heading1 = document.createElement('h1')
console.log(heading1)
heading1.className = "main heading"
heading1.id = Math.round(Math.random())
heading1.setAttribute("heading", "generated heading") //directly sets the attribute
heading1.style.color = "blue"
// heading1.innerText = "Hello world" // this innerHTML overrites the html content
const addText = document.createTextNode("Hello")
heading1.appendChild(addText);

document.body.appendChild(heading1) // it append or puts the element inside the html page using this appendChild code line
