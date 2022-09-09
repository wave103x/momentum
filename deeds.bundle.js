/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/deeds.js ***!
  \**********************/

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlZHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RyxRQUFRO0FBQ3JILHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvZGVlZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vdGFzayBtYW5hZ2VyXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVlZHNfX2J0bicpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVlZHMtd2luZG93X190YXNrcycpLmNsYXNzTGlzdC50b2dnbGUoJ2ZlYXR1cmVfX3dpbmRvd19hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy13aW5kb3cnKS5jbGFzc0xpc3QucmVtb3ZlKCdmZWF0dXJlX193aW5kb3dfYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlua3Mtd2luZG93JykuY2xhc3NMaXN0LnJlbW92ZSgnZmVhdHVyZV9fd2luZG93X2FjdGl2ZScpO1xyXG59XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rc19fYnRuJykub25jbGljayA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rcy13aW5kb3cnKS5jbGFzc0xpc3QudG9nZ2xlKCdmZWF0dXJlX193aW5kb3dfYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVlZHMtd2luZG93X190YXNrcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZlYXR1cmVfX3dpbmRvd19hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy13aW5kb3cnKS5jbGFzc0xpc3QucmVtb3ZlKCdmZWF0dXJlX193aW5kb3dfYWN0aXZlJyk7XHJcbn1cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzX19idG4nKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXdpbmRvdycpLmNsYXNzTGlzdC50b2dnbGUoJ2ZlYXR1cmVfX3dpbmRvd19hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rcy13aW5kb3cnKS5jbGFzc0xpc3QucmVtb3ZlKCdmZWF0dXJlX193aW5kb3dfYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVlZHMtd2luZG93X190YXNrcycpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZlYXR1cmVfX3dpbmRvd19hY3RpdmUnKTtcclxufVxyXG5cclxuY29uc3QgaW5wdXRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZWRzX19pbnB1dC10YXNrJyk7XHJcbmNvbnN0IGlucHV0QWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZWRzX19hZGQtdGFzay1idG4nKTtcclxuXHJcbmxldCBhcnJUYXNrc1F0eSA9IFtdO1xyXG5cclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcnJUYXNrUXR5JykpIHtcclxuICAgIGFyclRhc2tzUXR5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyVGFza1F0eScpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyVGFza3NRdHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjcmVhdGVUYXNrKChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFzaycgKyBhcnJUYXNrc1F0eVtpXSkpKTtcclxuICAgIH1cclxufSBlbHNlIHtcclxuICAgIGFyclRhc2tzUXR5ID0gW107XHJcbn1cclxuXHJcbmlucHV0QWRkQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCFpbnB1dFRhc2sudmFsdWUudHJpbSgpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tbmV3LXRhc2snKS5yZXNldCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUYXNrKGlucHV0VGFzay52YWx1ZSk7XHJcblxyXG4gICAgaWYgKGFyclRhc2tzUXR5Lmxlbmd0aCA9PT0gMCkgYXJyVGFza3NRdHkucHVzaCgwKTtcclxuICAgIGVsc2UgYXJyVGFza3NRdHkucHVzaChhcnJUYXNrc1F0eVthcnJUYXNrc1F0eS5sZW5ndGggLSAxXSArIDEpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcnJUYXNrUXR5JywgSlNPTi5zdHJpbmdpZnkoYXJyVGFza3NRdHkpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJyArIChhcnJUYXNrc1F0eVthcnJUYXNrc1F0eS5sZW5ndGggLSAxXSksIGlucHV0VGFzay52YWx1ZSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tbmV3LXRhc2snKS5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tUZXh0KSB7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ3dpbmRvdy10YXNrJywgJ2ZlYXR1cmVfX2l0ZW0nKTtcclxuICAgIG5ld1Rhc2suaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidGFzay1jb21wbGV0ZVwiIGNsYXNzPVwidGFzay1jaGVja2JveFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIndpbmRvdy10YXNrX192YWx1ZVwiPiR7dGFza1RleHR9PC9kaXY+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwid2luZG93LWJ0biB3aW5kb3ctdGFza19fYnRuLWVkaXRcIiB0eXBlPVwiYnV0dG9uXCI+ZWRpdDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIndpbmRvdy1idG4gd2luZG93LXRhc2tfX2J0bi1kZWxcIiB0eXBlPVwiYnV0dG9uXCI+ZGVsPC9idXR0b24+XHJcbiAgICA8ZGl2IGNsYXNzPVwid2luZG93LXRhc2tfX21vZGFsLWVkaXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZWRpdCBtb2RhbC1lZGl0X19lZGl0XCI+ZWRpdDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1lZGl0IG1vZGFsLWVkaXRfX21vdmUtdGFiXCI+bW92ZSB0byB0YWI8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZWRpdCBtb2RhbC1lZGl0X19kZWxldGVcIj5kZWw8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZWRpdCBtb2RhbC1lZGl0X19tb3ZlLWRvd25cIj5tb3ZlIGRvd248L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVlZHMtd2luZG93X190YXNrcycpLmluc2VydEJlZm9yZShuZXdUYXNrLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1uZXctdGFzaycpKTtcclxuXHJcbiAgICBsZXQgd2luZG93VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2luZG93LXRhc2snKTtcclxuICAgIGxldCBkZWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndpbmRvdy10YXNrX19idG4tZGVsJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbEJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkZWxCdG5zW2ldLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFyclRhc2tzUXR5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyVGFza1F0eScpKTtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWRUYXNrID0gcGFyc2VJbnQoYXJyVGFza3NRdHlbaV0pO1xyXG4gICAgICAgICAgICBhcnJUYXNrc1F0eS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YXNrJyArIChkZWxldGVkVGFzaykpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyVGFza1F0eScsIEpTT04uc3RyaW5naWZ5KGFyclRhc2tzUXR5KSk7XHJcbiAgICAgICAgICAgIHdpbmRvd1Rhc2tzW2ldLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbGV0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jaGVja2JveCcpO1xyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBjaGVja2JveGVzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgY2hlY2tib3hlc1trXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGVja2JveGVzW2tdLnBhcmVudE5vZGUuY2hpbGRyZW5bMV0uY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tib3hfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBlZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aW5kb3ctdGFza19fYnRuLWVkaXQnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdEJ0bnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBlZGl0QnRuc1tpXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZWxlbVRhc2tWYWx1ZSA9IHdpbmRvd1Rhc2tzW2ldLnF1ZXJ5U2VsZWN0b3IoJy53aW5kb3ctdGFza19fdmFsdWUnKTtcclxuICAgICAgICAgICAgbGV0IHRhc2tWYWx1ZSA9IGVsZW1UYXNrVmFsdWUudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGVsZW1UYXNrVmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgY29uc3QgZGlzY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBuZXdJbnB1dC5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlX19pbnB1dC10ZXh0Jyk7XHJcblxyXG4gICAgICAgICAgICBuZXdJbnB1dC52YWx1ZSA9IHRhc2tWYWx1ZTtcclxuICAgICAgICAgICAgd2luZG93VGFza3NbaV0uZmlyc3RFbGVtZW50Q2hpbGQuYWZ0ZXIobmV3SW5wdXQpO1xyXG4gICAgICAgICAgICBuZXdJbnB1dC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgbmV3SW5wdXQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIGVkaXRCdG5zW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRlbEJ0bnNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgZGlzY2FyZC50ZXh0Q29udGVudCA9ICdkaXNjYXJkJztcclxuICAgICAgICAgICAgbmV3SW5wdXQuYWZ0ZXIoZGlzY2FyZCk7XHJcbiAgICAgICAgICAgIGRpc2NhcmQuY2xhc3NMaXN0LmFkZCgnd2luZG93LWJ0bicpO1xyXG4gICAgICAgICAgICBkaXNjYXJkLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdJbnB1dC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgICAgICBlbGVtVGFza1ZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgbmV3SW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGRpc2NhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIGVkaXRCdG5zW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgZGVsQnRuc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBuZXdJbnB1dC5vbmtleXVwID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SW5wdXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1UYXNrVmFsdWUudGV4dENvbnRlbnQgPSBuZXdJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtVGFza1ZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0lucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRCdG5zW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbEJ0bnNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyAgICAgICAgICBsaW5rc1xyXG5cclxuY29uc3QgYWRkTGlua0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rc19fYWRkLWxpbmstYnRuJyk7XHJcbmNvbnN0IG5ld0xpbmtJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rc19faW5wdXQtdXJsJyk7XHJcbmxldCBsaW5rc0FyciA9IFtdO1xyXG5sZXQgbGlua3NPYmogPSB7fTtcclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaW5rc09iaicpKSB7XHJcbiAgICBsaW5rc09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpbmtzT2JqJykpO1xyXG4gICAgZm9yIChsZXQgaSBvZiBPYmplY3QudmFsdWVzKGxpbmtzT2JqKSkge1xyXG4gICAgICAgIGNyZWF0ZUxpbmsoaSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmFkZExpbmtCdG4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIW5ld0xpbmtJbnB1dC52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1uZXctbGluaycpLnJlc2V0KCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlTGluayhuZXdMaW5rSW5wdXQudmFsdWUpO1xyXG4gICAgbGlua3NPYmpbK09iamVjdC5rZXlzKGxpbmtzT2JqKS5wb3AoKSArIDEgfHwgMF0gPSBuZXdMaW5rSW5wdXQudmFsdWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlua3NPYmonLCBKU09OLnN0cmluZ2lmeShsaW5rc09iaikpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tbmV3LWxpbmsnKS5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rKHVybCkge1xyXG4gICAgbGV0IHVybE5hbWUgPSB1cmw7XHJcbiAgICBpZiAodXJsTmFtZS5zZWFyY2goL1xcL1xcLyguKikvKSAhPT0gLTEpIHtcclxuICAgICAgICB1cmxOYW1lID0gKHVybE5hbWUubWF0Y2goL1xcL1xcLyguKikvKSlbMV0uc2xpY2UoMCwgLTEpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3TGluay5jbGFzc0xpc3QuYWRkKCd3aW5kb3ctbGluaycsICdmZWF0dXJlX19pdGVtJyk7XHJcbiAgICBuZXdMaW5rLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwibGluay1mYXZpY29uXCIgYWx0PVwiZmF2aWNvblwiIHNyYz1cImh0dHBzOi8vaWNvbnMuZHVja2R1Y2tnby5jb20vaXAyL3d3dy4ke3VybE5hbWV9Lmljb1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cIndpbmRvdy1saW5rX192YWx1ZVwiPiR7dXJsTmFtZX08L2Rpdj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJ3aW5kb3ctYnRuIHdpbmRvdy1saW5rX19idG4tZWRpdFwiPmVkaXQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJ3aW5kb3ctYnRuIHdpbmRvdy1saW5rX19idG4tZGVsXCI+ZGVsPC9idXR0b24+YDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rcy13aW5kb3dfX2xpbmtzJykuYXBwZW5kQ2hpbGQobmV3TGluayk7XHJcbiAgICBsaW5rc0FyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53aW5kb3ctbGluaycpO1xyXG4gICAgbmV3TGluay5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJywgdXJsKTtcclxuICAgIGVkaXRMaW5rKCk7XHJcbiAgICByZW1vdmVMaW5rKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUxpbmsoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGlua3NBcnJbaV0uY2hpbGRyZW5bM10ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiBpbiBsaW5rc09iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmtzT2JqW2pdID09PSBsaW5rc0FycltpXS5jaGlsZHJlblsxXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbGlua3NPYmpbal07XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpbmtzT2JqJywgSlNPTi5zdHJpbmdpZnkobGlua3NPYmopKVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzQXJyW2ldLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0TGluaygpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3NBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsaW5rc0FycltpXS5jaGlsZHJlblsyXS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsaW5rc0FycltpXS5jaGlsZHJlblsyXS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGxpbmtzQXJyW2ldLmNoaWxkcmVuWzNdLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgYWRkTGlua0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUJ0bi50ZXh0Q29udGVudCA9ICd1cGRhdGUnO1xyXG4gICAgICAgICAgICB1cGRhdGVCdG4uY2xhc3NMaXN0LmFkZCgnd2luZG93LWJ0bicpO1xyXG4gICAgICAgICAgICBuZXdMaW5rSW5wdXQuYWZ0ZXIodXBkYXRlQnRuKTtcclxuICAgICAgICAgICAgbGV0IGRpc2NhcmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgZGlzY2FyZEJ0bi50ZXh0Q29udGVudCA9ICdkaXNjYXJkJztcclxuICAgICAgICAgICAgZGlzY2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCd3aW5kb3ctYnRuJyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUJ0bi5hZnRlcihkaXNjYXJkQnRuKTtcclxuICAgICAgICAgICAgZGlzY2FyZEJ0bi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW5ldy1saW5rJykucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGRpc2NhcmRCdG4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVCdG4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBhZGRMaW5rQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgICAgICAgICAgIGxpbmtzQXJyW2ldLmNoaWxkcmVuWzJdLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgICAgICAgICBsaW5rc0FycltpXS5jaGlsZHJlblszXS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiBpbiBsaW5rc09iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmtzT2JqW2pdID09PSBsaW5rc0FycltpXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0xpbmtJbnB1dC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0xpbmtJbnB1dC52YWx1ZSA9IGxpbmtzT2JqW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc09ialtqXSA9IG5ld0xpbmtJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpbmtzT2JqJywgSlNPTi5zdHJpbmdpZnkobGlua3NPYmopKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc0FycltpXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IG5ld0xpbmtJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NBcnJbaV0uY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdkYXRhLXVybCcsIG5ld0xpbmtJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NhcmRCdG4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJ0bi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTGlua0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW5ldy1saW5rJykucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NBcnJbaV0uY2hpbGRyZW5bMl0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NBcnJbaV0uY2hpbGRyZW5bM10uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==