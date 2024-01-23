


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


let oldChild = document.querySelector("p")
let newChild = document.createElement("p")
const newBucket = document.createTextNode("Travel the world")
newChild.appendChild(newBucket)
list.replaceChild(newChild, oldChild)


let oldChild2 = document.querySelectorAll("p")
let newChild2 = document.createElement("p")
const newBucket2 = document.createTextNode("Travel the world2")
newChild.appendChild(newBucket2)
list.replaceChild(newChild2, oldChild2[1])


let last = list.lastElementChild
console.log(last)
let result = list.removeChild(last)
console.log(result)

}

function addWithLoop () {
    for (let i= 0; i<3; i++) {
    const node = document.createElement("p")
    const textnode2 = document.createTextNode("Earn a million dollars!")
    node.appendChild(textnode2)
   document.body.appendChild(node)
}
}