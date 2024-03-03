let input = document.querySelector("input")
let button = document.querySelector("button")
let commentArr = []

button.addEventListener("click",()=>{

    let mainDiv = document.getElementById("comment")
    let div = document.createElement('div')
    div.classList.add("comments")
    let comment = document.createElement("h3")
    comment.innerHTML = input.value
    commentArr.push(input.value)

    let divIn = document.createElement("div")
    divIn.classList.add("commentFun")
    

    let deleteC = document.createElement("h5")
    deleteC.innerHTML = "Delete"
    deleteC.setAttribute("id","deleteComment")
    
    mainDiv.appendChild(div)
    div.appendChild(comment)
    div.appendChild(divIn)
    divIn.appendChild(deleteC)
    
    console.log(commentArr)
    
    function deleteComs(){

        let commentDelete = document.querySelectorAll("h5")
        for(let i=0;i<commentDelete.length;i++){
            commentDelete[i].addEventListener("click",()=>{
                div.style.display="none"
            })
        }
      
    }
    deleteComs()

    
})

