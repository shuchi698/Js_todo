const container = document.getElementById('main');
const main2 = document.getElementById('main2');
const first = document.getElementById('first');
// const addtask=document.querySelector('.')

const addlistBtn = document.getElementById('addBtn');
const flex = document.getElementById('first');

const addNewList = document.getElementById('addNewList');
const listText = document.getElementById('listText');
const listBtn = document.getElementById('listBtn');
const cancelBtn = document.getElementById('cancelBtn');

const addNewItem = document.getElementById('addNewItem');
const itemText = document.getElementById('itemText');
const itemBtn = document.getElementById('itemBtn');

let page2BackBtn = document.getElementById('btn2');
let page2AddBtn = document.getElementById('addBtn2');

const page2Contains = document.getElementById('main2');

function popupW() {
    addNewList.classList.toggle('addNewListActive');

}
addNewList.addEventListener('click',function(){
    container.classList.remove('blur')
})

addlistBtn.addEventListener('click', function () {
    popupW();
    // document.querySelector('.whole').classList.add('blur')    //background blur
    container.classList.add('blur');

    // main2.classList.add('blur');
    // first.classList.toggle('blur');

});

// addtask.addEventListener("click", function () {
//         // first.classList.toggle('blur');

//     document.getElementById('sub-container').style.display="block"
//     document.getElementById('#addBtn').classList.remove('hidden') //popup
//     document.querySelector('.whole').classList.add('container2')    //background blur
// })
cancelBtn.addEventListener('click', popupW)

listBtn.addEventListener('click', () => {
    popupW();
    let card = document.createElement('div');
    card.classList.add('task');
    flex.appendChild(card);

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('cardHeader');
    card.appendChild(cardHeader);

    let newListTitle = document.createElement('h2');
    newListTitle.classList.add('task_title');
    newListTitle.style.color = 'tomato';
    newListTitle.innerHTML = `
        ${listText.value} 
        `;
    cardHeader.appendChild(newListTitle);

    let line = document.createElement('hr');
    line.classList.add('line');
    cardHeader.appendChild(line);
    newListTitle.addEventListener('click', myFunc)
    function myFunc(e) {
        e.target.parentElement.parentElement.classList.toggle('active');
        let activeList = document.querySelectorAll('.task');
        for (let i = 0; i < activeList.length; i++) {
            if (activeList[i] !== e.target.parentElement.parentElement) {
                activeList[i].classList.add('inactive');
                container.classList.add('inactive');
                page2Contains.classList.add('active');

                let page2Title = document.createElement('h2');
                page2Title.innerHTML = `
                <span style="color:tomato;">${newListTitle.innerHTML}</span> 
                `;
                page2BackBtn.after(page2Title);

                page2BackBtn.addEventListener('click', () => {
                    container.classList.remove('inactive');
                    activeList[i].classList.remove('inactive');
                    page2Contains.classList.remove('active');
                    page2Title.remove();

                });
                page2AddBtn.addEventListener('click', () => {
                    page2AddBtn.style.filter = blur("3px");

                    popupW();
                    container.classList.remove('inactive');
                    activeList[i].classList.remove('inactive');
                    page2Contains.classList.remove('active');
                    page2Title.remove();
                });

            }
        }
        e.target.removeclass('task_title');
    }
    let newTaskBody = document.createElement('div');
    newTaskBody.classList.add('task_body');
    newTaskBody.innerHTML = `
        <div class="btn-ListBody">
        <span class="material-icons removeTask" style="color:blue;" >
        delete
        </span>
        <span class="material-icons addTask">
        add_circle
        </span>
        </div>
        `;
    card.appendChild(newTaskBody);

});


flex.addEventListener('click', scratchTodo);

function scratchTodo(e) {
    let item = e.target;
    if (item.classList.contains('pendingIcon')) {
        item.parentElement.classList.toggle('me');

    }
}

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeTask')) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('addTask')) {
        addNewItem.classList.toggle('addNewItemActive');
        parentNode = e.target.parentNode.parentNode.parentNode;
    }
});

itemBtn.addEventListener('click', () => {

    addNewItem.classList.toggle('addNewItemActive');

    let newTask = document.createElement('p');
    newTask.classList.add('taskText');
    parentNode.appendChild(newTask);

    let pTask = document.createElement('div');
    pTask.classList.add('pTask');
    pTask.id = 'pendingtasks';

    pTask.innerHTML = `
        <span class="material-icons pendingIcon ">indeterminate_check_box</span>
        <p class="scratch" id="">${itemText.value}</p>
        `;
    parentNode.appendChild(pTask);
    itemText.value = '';
});