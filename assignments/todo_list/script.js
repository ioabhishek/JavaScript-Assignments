// let btn = document.querySelector('button');
// let todoList = document.querySelector('.todos');
// let count = 0;
// btn.addEventListener('click', addToDo);

// function addToDo() {
//     let inputValue = document.querySelector('input').value;
//     if (inputValue == "") {
//         alert("Please Enter Task");
//     } else {
//         let paragraph = document.createElement('p');
//         document.querySelector('input').value="";
//         paragraph.innerHTML = inputValue;
//         paragraph.setAttribute('key', count);
//         count += 1;
//         todoList.appendChild(paragraph);
//         paragraph.addEventListener('click', paragraph.remove);
//     }
// }

async function  get_data(){
    try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
    } catch(error){
        console.log(error);
    }
}

async function get_user() {
    let user = await get_data();
    let completed ='';
    let incompleted = '';
    user.forEach(element => {
        if (element.completed == true) {
            completed += `<li> ${element.title}`
        } else {
            incompleted += `<li> ${element.title}`
        }
    });

    let b1 = document.querySelector('#bt1');
    b1.addEventListener('click', compTask);

    let b2 = document.querySelector('#bt2');
    b2.addEventListener('click', pendTask);

    function compTask() {
        document.getElementById('res')
        .innerHTML=completed;
    }

    function pendTask() {
        document.getElementById('res')
        .innerHTML=incompleted;
    }
}

get_user();
