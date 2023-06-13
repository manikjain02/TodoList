const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// adding task in our list dynamically
function addTask(){
    // if we add black task then alert box appeared
    if(inputBox.value === ''){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        
        // making a cross button
        let span = document.createElement("span")
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData()  // save our data
}

// javascript code for the cross button function and when we click on the text it will make it checked and unchecked
listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        saveData()  // save our data
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()  // save our data
    }
}, false)

// When we refresh our page our data will be lost... in order to save our data we need local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

// When we open our website again then we want our unchecked task back
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()