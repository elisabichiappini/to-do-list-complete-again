/********SCRIPT*********/
//funzioni
function showTodos() {
    elementUl.innerHTML = '';
    result.forEach((todo) => {
        const elementLi = document.createElement('li');
        elementLi.classList.add('list-group-item');
        elementLi.innerHTML = `${todo.check} ${todo.title} `;
        elementUl.append(elementLi);
    })
}

function hiddenTodos() {
    return elementUl.innerHTML = '';
}

//classi
class Todo {
    title;
    check;
    constructor(_title){
        this.title = _title;
        this.check = false;
    }
};

class AppTodo {
    todos;
    constructor() {
        this.todos = [];
    }
    getAllTodos() {
        return this.todos;
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
};

//istanza classe 
const todoList = new AppTodo();
todoList.addTodo(new Todo('Fare la spesa'));
todoList.addTodo(new Todo('Telefonare al medico'));
todoList.addTodo(new Todo('Andare a lezione di piano'));

//variabili
const result = todoList.getAllTodos();
const elementButtonShow = document.getElementById('show-todos');
const elementButtonHidden = document.getElementById('hidden-todos');
const elementUl = document.querySelector('.todos'); 

elementButtonShow.addEventListener('click', showTodos);
elementButtonHidden.addEventListener('click', hiddenTodos);

//aggiungere un nuovoTodo
const elementButtonAdd = document.getElementById('add-todo');
elementButtonAdd.addEventListener('click', function(event) {
    event.preventDefault();
    const todoText = document.getElementById('todo').value;
    todoList.addTodo(new Todo(todoText));
    document.getElementById('todo').value = '';
    showTodos();
});
