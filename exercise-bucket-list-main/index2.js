


document.body.onload = addElement

function addElement() {
 
const node = document.createElement("p")
const textnode = document.createTextNode("Visit the pyramids")
node.appendChild(textnode)
document.body.appendChild(node)

const node2 = document.createElement("p")
const textnode2 = document.createTextNode("Write a book")
node2.appendChild(textnode2)
node.insertAdjacentElement("afterend", node2)

let nodeList = document.querySelector('section')
// console.log(nodeList)
let text = nodeList.innerHTML
console.log(text)

/*
let newInnerHtmlString = "<p>Win an olympic medal</p>"
let list = document.querySelector(".list")
console.log(list)
list.innerHTML=newInnerHtmlString
*/

let list = document.querySelector(".list")
list.insertAdjacentHTML("beforeend", "<p>Win an olympic medal</p>")

}