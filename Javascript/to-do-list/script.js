
let listElement = document.querySelector('.app ul');
let inputElement = document.querySelector('.app input');
let buttonElement = document.querySelector('.app button');


// \/ aqui ele faz uma verificação no localstorage para buscar a lista, porem como vem do local como string precisa transformar novamente em array, por isso o atributo PARSE, e usando o operador || (ou) caso não haja lista, ele retorna uma lista vazia

let toDoList = JSON.parse(localStorage.getItem('@todolist')) || [];

function renderTask(){
    listElement.innerHTML = '';

    toDoList.map((task, index)=>{
        let liElement = document.createElement('li');
        let taskText = document.createTextNode(task);

        let finishedElement = document.createElement('a');
        finishedElement.setAttribute('href', '#');

        let finishedIcon = document.createElement('i');
        finishedIcon.classList.add("fa-solid", "fa-check", 'check');

        let deleteElement = document.createElement('a');
        deleteElement.setAttribute('href', '#');

        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash', 'delete');
        

        finishedElement.appendChild(finishedIcon);
        deleteElement.appendChild(deleteIcon);

        let position = toDoList.indexOf(task);

        deleteElement.setAttribute('onclick', `deleteTask(${position})`);
        finishedElement.setAttribute('onclick', `completedTask(${position})`);


        liElement.appendChild(taskText);
        liElement.appendChild(finishedElement);
        liElement.appendChild(deleteElement);
        listElement.appendChild(liElement);

        if (toDoListCompleted.includes(index)) {
            liElement.classList.add('completed');
        }

    })
}

let toDoListCompleted = []; // array para rastrear quais tarefas estão concluidas

// função para riscar como feita a tarefa quando clicar no icone de concluida

function completedTask(position) {
    // Se a tarefa já estiver concluída, desmarque-a
    if (toDoListCompleted.includes(position)) {
        const index = toDoListCompleted.indexOf(position);
        toDoListCompleted.splice(index, 1);
    } else {
        // Marque a tarefa como concluída
        toDoListCompleted.push(position);
    }
    
    renderTask();
    saveData();
}

renderTask(); // << para renderizar assim que o user abrir por isso chama a function fora dela



function addList(){
    if(inputElement.value === ''){
        alert('Você não digitou uma nova tarefa!');
        return false;
    } else{
        let newTask = inputElement.value;

        toDoList.push(newTask);
        inputElement.value = '';

        renderTask();
        saveData();
    }

}


// função para adicionar uma nova tarefa apertando 'Enter', sem a necessidade de clicar no botao adicionar!!

function keyPress(event){ 
    if(event.key === 'Enter'){
        addList();
    }
}

buttonElement.onclick = addList;
inputElement.addEventListener('keypress', keyPress); // adicionando a função para adc o que vem do input

function deleteTask(position){
    toDoList.splice(position, 1);
    renderTask();
    saveData();
}



function saveData(){
    localStorage.setItem('@todolist', JSON.stringify(toDoList)) // localstorage nao salva listas, precisa transformar em string, para isso usa-se o atributo acima, json.stringify
}
