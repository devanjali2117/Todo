const input = document.getElementById("input")
const list = document.getElementById("list")
const button = document.getElementById("btn")

function addTask() {
  if (input.value === "") {
    alert("you must write something!")
  } else {
    let ul = document.createElement("ul")
    let li = document.createElement("li")
    li.innerHTML = input.value
    ul.appendChild(li)
    list.appendChild(ul)
    console.log("LIST", list)
  }
  input.value = ""
}

button.addEventListener("click", addTask)
