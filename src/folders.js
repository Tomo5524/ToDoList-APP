import closeItem from "./close.js"

const displayFolder = () =>{

    console.log('folder called')

    // console.log('folder')
    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay');
    // overlay.display = overlay.display === 'none' ? 'none' : 'block'
    
    if (overlay.classList.contains('no-display')){
        overlay.classList.remove('no-display')
    }

    const container = document.createElement('div');
    container.setAttribute('class', 'folder-cotainer h-100 bg-light col-5');

    const remove_btn = document.createElement('button');
    remove_btn.setAttribute('class', 'remove_btn mt-4');

    const remove_icon = document.createElement('i');
    remove_icon.setAttribute('class', 'fas fa-times');

    remove_btn.appendChild(remove_icon)

    const project_div = document.createElement('div');
    project_div.setAttribute('class', 'project-div py-3');

    const header = document.createElement('h1');
    header.setAttribute('class', 'folder-heder');
    header.innerHTML = 'Project'

    const add_project = document.createElement('button')
    add_project.setAttribute('class', 'project-add-btn');

    // when clicked, it takes user to today's folder
    const today = document.createElement('h3');
    today.setAttribute('class', 'today-text');
    today.innerHTML = 'Today'

    const test1 = document.createElement('h3');
    test1.setAttribute('class', 'test-text');
    test1.innerHTML = 'test1'

    const test2 = document.createElement('h3');
    test2.setAttribute('class', 'test-text');
    test2.innerHTML = 'test2'

    project_div.appendChild(header)
    project_div.appendChild(add_project)
    project_div.appendChild(today)
    project_div.appendChild(test1)
    project_div.appendChild(test2)


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
        // overlay.display = overlay.display === 'block' ? 'none' : 'block'
    })

    return overlay

    
}

export default displayFolder