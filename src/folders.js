import closeItem from "./close.js"

const displayFolder = () =>{

    console.log('folder')
    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay');
    overlay.display = 'block'

    const container = document.createElement('div');
    container.setAttribute('class', 'folder-cotainer h-100 bg-light col-5');

    const remove_btn = document.createElement('button');
    remove_btn.setAttribute('class', 'remove_btn');

    const remove_icon = document.createElement('i');
    remove_icon.setAttribute('class', 'fas fa-times');

    remove_btn.appendChild(remove_icon)

    const project_div = document.createElement('div');
    project_div.setAttribute('class', 'project-div');

    const header = document.createElement('h3');
    header.setAttribute('class', 'folder-heder');
    header.innerHTML = 'Project'

    const add_project = document.createElement('button')
    add_project.setAttribute('class', 'project-add-btn');

    project_div.appendChild(header)
    project_div.appendChild(add_project)


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

    container.appendChild(remove_btn)
    container.appendChild(project_div)

    overlay.appendChild(container)

    // totally works
    remove_btn.addEventListener('click', e => {
        closeItem(overlay)
    })

    return overlay

    
}

export default displayFolder