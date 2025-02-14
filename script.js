const listContainer = document.getElementById("list-container");
const eliminarTodo = document.getElementById("deletebtn")

function addTask(){
    if(inputBox.value === '') {
        alert("Necesitas escribir algo");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

document.getElementById("input-box").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        addTask();
    }
});

showTask();

const placeholders = [
    "Añade tu batinota 🦇",
    "¿Qué misión tienes hoy? 🦸‍♂️",
    "Anota tus planes heroicos ✍️",
    "Prepárate para salvar el día ⚡",
    "Lista de tareas de Batman 🏆",
    "¿Qué más falta en la Batcueva? 🔦"
];

let index = 0;
const inputBox = document.getElementById("input-box");
function cambiarPlaceholder() {
    if (inputBox.value === "") { 
    inputBox.style.opacity = 0;

    setTimeout(() => {

        inputBox.setAttribute("placeholder", placeholders[index]);
        index = (index + 1) % placeholders.length;
        inputBox.style.opacity = 1;
    }, 500);
 }
}

setInterval(cambiarPlaceholder, 2000);


function deleteAllTask() {
    const confirmDelete = confirm ("Estas seguro que quieres eliminar todo?");
    if (confirmDelete) {
        listContainer.innerHTML = "";
        localStorage.removeItem("data");
    }

}
eliminarTodo.addEventListener("click", deleteAllTask);