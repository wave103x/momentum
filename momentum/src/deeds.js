//task manager

const inputTask = document.querySelector('.deeds__input-task');
const inputAddBtn = document.querySelector('.deeds__add-task-btn');

if (localStorage.getItem('arrTaskQty')) {
    arrTasksQty = JSON.parse(localStorage.getItem('arrTaskQty'));
    for (let i = 0; i < arrTasksQty.length; i++) {
        createTask((localStorage.getItem('task' + arrTasksQty[i])))
    }
} else {
    arrTasksQty = new Array();
}


inputAddBtn.onclick = (e) => {
    e.preventDefault();
    createTask(inputTask.value);

    if (localStorage.getItem('arrTaskQty')) {
        arrTasksQty = JSON.parse(localStorage.getItem('arrTaskQty'));
        arrTasksQty.push(arrTasksQty[arrTasksQty.length - 1] + 1);
    } else {
        arrTasksQty = new Array();
        arrTasksQty.push(0);
    }
    localStorage.setItem('arrTaskQty', JSON.stringify(arrTasksQty));

    addTaskToLocal(inputTask.value, arrTasksQty.length - 1);
    document.querySelector('.form-new-task').reset();
}

function createTask(taskText) {
    const newTask = document.createElement('div');
    newTask.classList.add('window-task');
    newTask.innerHTML = `<input type="checkbox" name="task-complete">
    <div class="window-task__value">${taskText}</div>
    <button class="window-task__btn-edit" type="button">edit</button>
    <button class="window-task__btn-del" type="button">del</button>
    <div class="window-task__modal-edit">
        <div class="modal-edit modal-edit__edit">edit</div>
        <div class="modal-edit modal-edit__move-tab">move to tab</div>
        <div class="modal-edit modal-edit__delete">del</div>
        <div class="modal-edit modal-edit__move-down">move down</div>
    </div>`;
    document.querySelector('.deeds__window').appendChild(newTask);
    makeDelBtn()
}

function addTaskToLocal(taskText, lastOfArr) {
    arrTasksQty = JSON.parse(localStorage.getItem('arrTaskQty'));
    localStorage.setItem('task' + (lastOfArr), taskText);
}

function makeDelBtn() {
    const taskDelBtn = document.querySelectorAll('.window-task__btn-del');
    for (let i = 0; i < taskDelBtn.length; i++) {
        taskDelBtn[i].onclick = () => {
            const windowTask = document.querySelectorAll('.window-task');
            localStorage.removeItem('task' + (i));
            arrTasksQty = JSON.parse(localStorage.getItem('arrTaskQty'));
            arrTasksQty.splice(i, 1);
            localStorage.setItem('arrTaskQty', JSON.stringify(arrTasksQty));
            windowTask[i].remove();
        }
    }
}
