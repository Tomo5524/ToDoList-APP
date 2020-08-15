import Task from "./task.js"


const renderTitle = () => {

    // const container = document.createElement('div');
    // container.setAttribute('class', 'main-container fluid-container d-flex');

    // const title__menu_container = document.createElement('div');
    // // container-fluid for a full width container,
    // title__menu_container.setAttribute('class', 'menu-cotainer col-4 border-r');

    // const nav = document.createElement('div');
    // nav.setAttribute('class', 'nav d-flex justify-content-between align-items-center');

    // const title_div = document.createElement('div');
    // title_div.setAttribute('class', 'title-div');

    // const title = document.createElement('h1');
    // title.setAttribute('class', 'logo');
    // title.innerHTML = 'TodoList'

    // title_div.appendChild(title)


    // const menu_add = document.createElement('div');
    // menu_add.setAttribute('class', 'menu-add-div');

    // const menu = document.createElement('button')
    // menu.setAttribute('class', 'btn menu-btn');

    // const menu_btn = document.createElement('i');
    // menu_btn.setAttribute('class', 'fas fa-bars');

    // menu.appendChild(menu_btn)

    // const add = document.createElement('button')
    // add.setAttribute('class', 'btn add-btn');

    // const add_btn = document.createElement('i')
    // add_btn.setAttribute('class', "fas fa-plus");

    // add.appendChild(add_btn)

    // menu_add.appendChild(menu)
    // menu_add.appendChild(add)

    // nav.appendChild(title_div)
    // nav.appendChild(menu_add)

    // title__menu_container.appendChild(nav)

    const tasks_container = document.createElement('div');
    // container-fluid for a full width container,
    tasks_container.setAttribute('class', 'task-container d-flex align-items-center justify-content-center col-8');

    const todo_list = document.createElement('ul');
    todo_list.setAttribute('class', 'todo-list js-todo-list');

    const empty_state = document.createElement('div');
    // container-fluid for a full width container,
    empty_state.setAttribute('class', 'empty-state');

    const btn_div = document.createElement('div');
    btn_div.setAttribute('class', 'btn-div text-center');

    const add_task = document.createElement('button')
    add_task.setAttribute('class', 'btn add-task-btn');

    const add_task_btn = document.createElement('i')
    add_task_btn.setAttribute('class', "fas fa-calendar-plus fa-3x");

    add_task.appendChild(add_task_btn)
    btn_div.appendChild(add_task)

    const add_text = document.createElement('h2');
    add_text.setAttribute('class', "add-text");
    add_text.innerHTML = "Add your first todo"

    const task_text = document.createElement('p');
    // task_text.setAttribute('class', "add-text");
    task_text.innerHTML = "What do you want to get done today?"
    
    empty_state.appendChild(btn_div)
    empty_state.appendChild(add_text)
    empty_state.appendChild(task_text)

    tasks_container.appendChild(todo_list)
    tasks_container.appendChild(empty_state)


    // const date_title_box = document.createElement('div');
    // date_title_box.setAttribute('class', 'd-flex align-items-center');

    // const folder_title = document.createElement('h3')
    // folder_title.setAttribute('class', 'task-title');
    // folder_title.innerHTML = 'Take a shower'

    // const task_date = document.createElement('h6')
    // task_date.setAttribute('class', 'task-date');
    // task_date.innerHTML = '8/4/2020'

    // const edit = document.createElement('button')
    // edit.setAttribute('class', 'btn edit-btn');

    // const edit_btn = document.createElement('i')
    // edit_btn.setAttribute('class', 'fas fa-edit');
    
    // edit.appendChild(edit_btn)

    // const remove = document.createElement('button')
    // remove.setAttribute('class', 'btn remove-btn');

    // const remove_btn = document.createElement('i')
    // remove_btn.setAttribute('class', "fas fa-trash-alt");

    // remove.appendChild(remove_btn)

    // date_title_box.appendChild(folder_title)
    // date_title_box.appendChild(task_date)
    // date_title_box.appendChild(edit)
    // date_title_box.appendChild(remove)

    // const ul = document.createElement('ul');
    // ul.setAttribute('class', "todo-list");

    // tasks_container.appendChild(date_title_box)
    // // tasks_container.appendChild(ul)

    // // container.appendChild(title__menu_container)
    // // container.appendChild(tasks_container)

    // edit.addEventListener('click', e => {
    //     console.log('edit hit')
    //     const a = Task()
    //     console.log(a)
    //     console.log(a.getObj())

    //     // Task.show_task()
        
    // })

    // can return multiple elements?
    return tasks_container

}

export default renderTitle