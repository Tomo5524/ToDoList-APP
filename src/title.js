
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
    tasks_container.setAttribute('class', ' task-container col-8');

    const date_title_box = document.createElement('div');
    date_title_box.setAttribute('class', 'd-flex align-items-center');

    const folder_title = document.createElement('h3')
    folder_title.setAttribute('class', 'task-title');
    folder_title.innerHTML = 'Take a shower'

    const task_date = document.createElement('h6')
    task_date.setAttribute('class', 'task-date');
    task_date.innerHTML = '8/4/2020'

    const edit = document.createElement('button')
    edit.setAttribute('class', 'btn edit-btn');

    const edit_btn = document.createElement('i')
    edit_btn.setAttribute('class', 'fas fa-edit');
   
    edit.appendChild(edit_btn)

    const remove = document.createElement('button')
    remove.setAttribute('class', 'btn remove-btn');

    const remove_btn = document.createElement('i')
    remove_btn.setAttribute('class', "fas fa-trash-alt");

    remove.appendChild(remove_btn)

    date_title_box.appendChild(folder_title)
    date_title_box.appendChild(task_date)
    date_title_box.appendChild(edit)
    date_title_box.appendChild(remove)

    tasks_container.appendChild(date_title_box)

    // container.appendChild(title__menu_container)
    // container.appendChild(tasks_container)

    return tasks_container
}

export default renderTitle