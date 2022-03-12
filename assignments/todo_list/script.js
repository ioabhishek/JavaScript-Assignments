let btn = document.querySelector('button');
btn.addEventListener('click', addToDo);

let todoList = document.querySelector('.todos');
let count = 0;

function addToDo() {
    let inputValue = document.querySelector('input').value;
    let paragraph = document.createElement('p');
    document.querySelector('input').value="";
    paragraph.innerHTML = inputValue;
    paragraph.setAttribute('key', count);
    count+=1;
    todoList.appendChild(paragraph);
    paragraph.addEventListener('click', paragraph.remove);
}