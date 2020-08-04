
const renderTitle = () => {
    const container = document.createElement('div');
    container.setAttribute('class', 'title-container fluid-container d-flex');

    const title__menu_container = document.createElement('div');
    // container-fluid for a full width container,
    title__menu_container.setAttribute('class', 'col-4');

    const title_box = document.createElement('div');
    title_box.setAttribute('class', 'title_box d-flex');

    const menu = document.createElement('button')
    menu.setAttribute('class', 'btn menu-btn');

    const menu_btn = document.createElement('i')
    menu_btn.setAttribute('class', 'fas fa-bars');

    menu.appendChild(menu_btn)

    const add = document.createElement('button')
    add.setAttribute('class', 'btn add-btn');

    const add_btn = document.createElement('i')
    add_btn.setAttribute('class', "fas fa-plus");

    add.appendChild(add_btn)

    const title = document.createElement('h1');
    title.setAttribute('class', 'logo');
    title.innerHTML = 'TodoList'

    title_box.appendChild(menu)
    title_box.appendChild(add)
    title_box.appendChild(title)

    title__menu_container.appendChild(title_box)

    const tasks_container = document.createElement('div');
    // container-fluid for a full width container,
    tasks_container.setAttribute('class', 'col-8');

    const date_title_box = document.createElement('div');
    date_title_box.setAttribute('class', 'date-title d-flex align-items-center');

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

    container.appendChild(title__menu_container)
    container.appendChild(tasks_container)

    return container
}

export default renderTitle