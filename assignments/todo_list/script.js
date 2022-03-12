let btn = document.querySelector('button');
let todoList = document.querySelector('.todos');
let count = 0;
btn.addEventListener('click', addToDo);

function addToDo() {
    let inputValue = document.querySelector('input').value;
    if (inputValue == "") {
        alert("Please Enter Task");
    } else {
        let paragraph = document.createElement('p');
        document.querySelector('input').value="";
        paragraph.innerHTML = inputValue;
        paragraph.setAttribute('key', count);
        count += 1;
        todoList.appendChild(paragraph);
        paragraph.addEventListener('click', paragraph.remove);
    }
}