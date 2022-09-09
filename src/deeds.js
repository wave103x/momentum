
//task manager

document.querySelector('.deeds__btn').onclick = () => {
    document.querySelector('.deeds-window__tasks').classList.toggle('feature__window_active');
    document.querySelector('.settings-window').classList.remove('feature__window_active');
    document.querySelector('.links-window').classList.remove('feature__window_active');
}
document.querySelector('.links__btn').onclick = () => {
    document.querySelector('.links-window').classList.toggle('feature__window_active');
    document.querySelector('.deeds-window__tasks').classList.remove('feature__window_active');
    document.querySelector('.settings-window').classList.remove('feature__window_active');
}
document.querySelector('.settings__btn').onclick = () => {
    document.querySelector('.settings-window').classList.toggle('feature__window_active');
    document.querySelector('.links-window').classList.remove('feature__window_active');
    document.querySelector('.deeds-window__tasks').classList.remove('feature__window_active');
}

const inputTask = document.querySelector('.deeds__input-task');
const inputAddBtn = document.querySelector('.deeds__add-task-btn');

let arrTasksQty = [];

if (localStorage.getItem('arrTaskQty')) {
    arrTasksQty = JSON.parse(localStorage.getItem('arrTaskQty'));
    for (let i = 0; i < arrTasksQty.length; i++) {
        createTask((localStorage.getItem('task' + arrTasksQty[i])));
    }
} else {
    arrTasksQty = [];
}

inputAddBtn.onclick = (e) => {
    e.preventDefault();
    if (!inputTask.value.trim()) {
        document.querySelector('.form-new-task').reset();
        return;
    }

    createTask(inputTask.value);

    if (arrTasksQty.length === 0) arrTasksQty.push(0);
    else arrTasksQty.push(arrTasksQty[arrTasksQty.length - 1] + 1);

    localStorage.setItem('arrTaskQty', JSON.stringify(arrTasksQty));
    localStorage.setItem('task' + (arrTasksQty[arrTasksQty.length - 1]), inputTask.value);

    document.querySelector('.form-new-task').reset();
}

function createTask(taskText) {
    const newTask = document.createElement('div');
    newTask.classList.add('window-task', 'feature__item');
    newTask.innerHTML = `<input type="checkbox" name="task-complete" class="task-checkbox">
    <div class="window-task__value">${taskText}</div>
    <button class="window-btn window-task__btn-edit" type="button">edit</button>
    <button class="window-btn window-task__btn-del" type="button">del</button>
    <div class="window-task__modal-edit">
        <div class="modal-edit modal-edit__edit">edit</div>
        <div class="modal-edit modal-edit__move-tab">move to tab</div>
        <div class="modal-edit modal-edit__delete">del</div>
        <div class="modal-edit modal-edit__move-down">move down</div>
    </div>`;
    document.querySelector('.deeds-window__tasks').insertBefore(newTask, document.querySelector('.form-new-task'));

    let windowTasks = document.querySelectorAll('.window-task');
    let delBtns = document.querySelectorAll('.window-task__btn-del');
    for (let i = 0; i < delBtns.length; i++) {
        delBtns[i].onclick = () => {
            arrTasksQty = JSON.parse(localStorage.getItem('arrTaskQty'));
            let deletedTask = parseInt(arrTasksQty[i]);
            arrTasksQty.splice(i, 1);
            localStorage.removeItem('task' + (deletedTask));
            localStorage.setItem('arrTaskQty', JSON.stringify(arrTasksQty));
            windowTasks[i].remove();
        }
    };

    let checkboxes = document.querySelectorAll('.task-checkbox');
    for (let k = 0; k < checkboxes.length; k++) {
        checkboxes[k].onclick = () => {
            checkboxes[k].parentNode.children[1].classList.toggle('checkbox_active');
        }
    }

    let editBtns = document.querySelectorAll('.window-task__btn-edit');
    for (let i = 0; i < editBtns.length; i++) {
        editBtns[i].onclick = () => {
            let elemTaskValue = windowTasks[i].querySelector('.window-task__value');
            let taskValue = elemTaskValue.textContent;
            elemTaskValue.style.display = 'none';

            const newInput = document.createElement('input');
            const discard = document.createElement('button');
            newInput.classList.add('feature__input-text');

            newInput.value = taskValue;
            windowTasks[i].firstElementChild.after(newInput);
            newInput.parentElement.children[0].style.visibility = 'hidden';
            newInput.focus();

            editBtns[i].style.display = 'none';
            delBtns[i].style.display = 'none';
            discard.textContent = 'discard';
            newInput.after(discard);
            discard.classList.add('window-btn');
            discard.onclick = () => {
                newInput.parentElement.children[0].style.visibility = 'visible';
                elemTaskValue.style.display = 'block';
                newInput.style.display = 'none';
                discard.style.display = 'none';
                editBtns[i].style.display = 'block';
                delBtns[i].style.display = 'block';
            }
            newInput.onkeyup = (e) => {
                if (e.key === 'Enter' || e.keyCode === 13) {
                    newInput.parentElement.children[0].style.visibility = 'visible';
                    elemTaskValue.textContent = newInput.value;
                    elemTaskValue.style.display = 'block';
                    newInput.style.display = 'none';
                    discard.style.display = 'none';
                    editBtns[i].style.display = 'block';
                    delBtns[i].style.display = 'block';
                }
            }
        }
    }
}


//          links

const addLinkBtn = document.querySelector('.links__add-link-btn');
const newLinkInput = document.querySelector('.links__input-url');
let linksArr = [];
let linksObj = {};
if (localStorage.getItem('linksObj')) {
    linksObj = JSON.parse(localStorage.getItem('linksObj'));
    for (let i of Object.values(linksObj)) {
        createLink(i)
    }
}


addLinkBtn.onclick = (e) => {
    e.preventDefault();
    if (!newLinkInput.value.trim()) {
        document.querySelector('.form-new-link').reset();
        return;
    }
    createLink(newLinkInput.value);
    linksObj[+Object.keys(linksObj).pop() + 1 || 0] = newLinkInput.value;
    localStorage.setItem('linksObj', JSON.stringify(linksObj));
    document.querySelector('.form-new-link').reset();
}

function createLink(url) {
    let urlName = url;
    if (urlName.search(/\/\/(.*)/) !== -1) {
        urlName = (urlName.match(/\/\/(.*)/))[1].slice(0, -1);
    }
    const newLink = document.createElement('div');
    newLink.classList.add('window-link', 'feature__item');
    newLink.innerHTML = `<img class="link-favicon" alt="favicon" src="https://icons.duckduckgo.com/ip2/www.${urlName}.ico">
    <div class="window-link__value">${urlName}</div>
    <button class="window-btn window-link__btn-edit">edit</button>
    <button class="window-btn window-link__btn-del">del</button>`;
    document.querySelector('.links-window__links').appendChild(newLink);
    linksArr = document.querySelectorAll('.window-link');
    newLink.children[1].setAttribute('data-url', url);
    editLink();
    removeLink();
}

function removeLink() {
    for (let i = 0; i < linksArr.length; i++) {
        linksArr[i].children[3].onclick = () => {
            for (let j in linksObj) {
                if (linksObj[j] === linksArr[i].children[1].getAttribute('data-url')) {
                    delete linksObj[j];
                    localStorage.setItem('linksObj', JSON.stringify(linksObj))
                    linksArr[i].remove();
                }
            }
        }
    }
}

function editLink() {
    for (let i = 0; i < linksArr.length; i++) {
        linksArr[i].children[2].onclick = () => {
            linksArr[i].children[2].style.visibility = 'hidden';
            linksArr[i].children[3].style.visibility = 'hidden';
            addLinkBtn.style.display = 'none';
            let updateBtn = document.createElement('button');
            updateBtn.textContent = 'update';
            updateBtn.classList.add('window-btn');
            newLinkInput.after(updateBtn);
            let discardBtn = document.createElement('button');
            discardBtn.textContent = 'discard';
            discardBtn.classList.add('window-btn');
            updateBtn.after(discardBtn);
            discardBtn.onclick = (e) => {
                e.preventDefault();
                document.querySelector('.form-new-link').reset();
                discardBtn.remove();
                updateBtn.remove();
                addLinkBtn.style.display = 'inline';
                linksArr[i].children[2].style.visibility = 'visible';
                linksArr[i].children[3].style.visibility = 'visible';
            };

            for (let j in linksObj) {
                if (linksObj[j] === linksArr[i].children[1].textContent) {
                    newLinkInput.focus();
                    newLinkInput.value = linksObj[j];
                    updateBtn.onclick = (e) => {
                        e.preventDefault();
                        linksObj[j] = newLinkInput.value;
                        localStorage.setItem('linksObj', JSON.stringify(linksObj))
                        linksArr[i].children[1].textContent = newLinkInput.value;
                        linksArr[i].children[1].setAttribute('data-url', newLinkInput.value);
                        discardBtn.remove();
                        updateBtn.remove();
                        addLinkBtn.style.display = 'inline';
                        document.querySelector('.form-new-link').reset();
                        linksArr[i].children[2].style.visibility = 'visible';
                        linksArr[i].children[3].style.visibility = 'visible';
                    }
                }
            }

        }
    }
}
