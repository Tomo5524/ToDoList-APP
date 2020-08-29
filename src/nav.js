
const displayNav = () => {

    const title__menu_container = document.createElement('div');
    // container-fluid for a full width container,
    title__menu_container.setAttribute('class', 'menu-cotainer col-4 border-r');

    const nav = document.createElement('div');
    nav.setAttribute('class', 'nav d-flex justify-content-between align-items-center');

    const title_div = document.createElement('div');
    title_div.setAttribute('class', 'title-div');

    const title = document.createElement('h1');
    title.setAttribute('class', 'logo');
    title.innerHTML = 'TodoList'

    title_div.appendChild(title)


    // const menu_add = document.createElement('div');
    // menu_add.setAttribute('class', 'menu-add-div');

    // const menu = document.createElement('button')
    // menu.setAttribute('class', 'btn menu-btn');

    // const menu_btn = document.createElement('i');
    // menu_btn.setAttribute('class', 'fas fa-bars');

    // menu.appendChild(menu_btn)

    // const add = document.createElement('button')
    // add.setAttribute('class', 'btn add-btn');

    // const addBtn = document.createElement('i')
    // addBtn.setAttribute('class', "fas fa-plus");

    // add.appendChild(addBtn)

    // menu_add.appendChild(menu)
    // menu_add.appendChild(add)

    // nav.appendChild(title_div)
    // nav.appendChild(menu_add)

    // title__menu_container.appendChild(nav)

    const folder_todo_add = document.createElement('div');
    folder_todo_add.setAttribute('class', 'folder-todo-add');

    const folder_add = document.createElement('button');
    folder_add.setAttribute('class', 'btn folder_add');

    const folder_add_icon = document.createElement('i');
    folder_add_icon.setAttribute('class', 'fas fa-folder-plus');
    folder_add_icon.setAttribute('id', 'add-folder-icon');

    folder_add.appendChild(folder_add_icon)

    const add = document.createElement('button')
    add.setAttribute('class', 'btn add-btn');

    const addBtn = document.createElement('i')
    addBtn.setAttribute('class', "fas fa-plus");

    add.appendChild(addBtn)

    folder_todo_add.appendChild(folder_add)
    folder_todo_add.appendChild(add)

    nav.appendChild(title_div)
    nav.appendChild(folder_todo_add)

    title__menu_container.appendChild(nav)

    return title__menu_container

}


export default displayNav