


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

addWithLoop ()

let children = list.childNodes
console.log(children)

let header = document.querySelector("h2")
header.innerHTML = "Therese's"


}

function addWithLoop () {
    for (let i= 0; i<3; i++) {
    const node = document.createElement("p")
    const textnode2 = document.createTextNode("Earn a million dollars!")
    node.appendChild(textnode2)
   document.body.appendChild(node)
}
}