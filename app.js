let input = document.querySelector("input")
let button = document.querySelector("button")

button.addEventListener("click",()=>{

    let mainDiv = document.getElementById("comment")
    let div = document.createElement('div')
    div.classList.add("comments")
    let comment = document.createElement("h3")
    comment.innerHTML = input.value

    mainDiv.appendChild(div)
    div.appendChild(comment)
})
