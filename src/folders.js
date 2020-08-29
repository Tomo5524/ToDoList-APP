import closeItem from "./close.js"
import Task from "./task.js"

const displayFolder = () =>{

    // console.log('folder called')

    // const form = document.createElement('form');
    // form.setAttribute('class', 'form');
    // console.log('folder')
    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay');
    // overlay.display = overlay.display === 'none' ? 'none' : 'block'
    
    // if (overlay.classList.contains('no-display')){
    //     overlay.classList.remove('no-display')
    // }

    const container = document.createElement('div');
    container.setAttribute('class', 'folder-cotainer h-100');

    // const icon_div = document.createElement('div');
    // icon_div.setAttribute('class', 'folder-icon-div d-flex justify-content-between');

    // const folder_add = document.createElement('button');
    // folder_add.setAttribute('class', 'btn folder_add');

    // const folder_add_icon = document.createElement('i');
    // folder_add_icon.setAttribute('class', 'fas fa-folder-plus');
   
    // const remove_btn = document.createElement('button');
    // remove_btn.setAttribute('class', 'btn remove_btn');

    // const remove_icon = document.createElement('i');
    // remove_icon.setAttribute('class', 'fas fa-times');

    // folder_add.appendChild(folder_add_icon)
    // remove_btn.appendChild(remove_icon)

    // icon_div.appendChild(remove_btn)
    // icon_div.appendChild(folder_add)

    const folder_div = document.createElement('div');
    folder_div.setAttribute('class', 'folder-div py-3');

    const header = document.createElement('h3');
    header.setAttribute('class', 'folder-heder pb-3');
    header.innerHTML = 'Project'

    const add_project = document.createElement('button')
    add_project.setAttribute('class', 'project-add-btn');

    const project_div = document.createElement('div');
    project_div.setAttribute('class', 'project-div');

    const project_div_input = document.createElement('div');
    project_div_input.setAttribute('class', 'project-div-input no-display');

    const project_input = document.createElement('input');
    project_input.setAttribute('class', 'project-input');
    project_input.setAttribute('placeholder', 'new project');

    

    const add_cancel_div = document.createElement('div');
    add_cancel_div.setAttribute('class', 'add-cancel-div d-flex p-3');

    const add_div = document.createElement('div');
    add_div.setAttribute('class', 'add-div mr-5');

    const add_btn = document.createElement('button');
    add_btn.setAttribute('class', 'add-box border');
    add_btn.innerHTML = 'Add'
    add_btn.type = 'submit'

    add_div.appendChild(add_btn)

    const cancel_div = document.createElement('div');
    cancel_div.setAttribute('class', 'cancel-div ml-5');

    const cancel_box = document.createElement('button');
    cancel_box.setAttribute('class', 'cancel-box border');
    cancel_box.innerHTML = 'Cancel'

    cancel_div.appendChild(cancel_box)

    add_cancel_div.appendChild(add_div)
    add_cancel_div.appendChild(cancel_div)

    project_div_input.appendChild(project_input)
    project_div_input.appendChild(add_cancel_div)

    // when clicked, it takes user to today's folder
    // const today = document.createElement('h3');
    // today.setAttribute('class', 'project-title my-2');
    // today.innerHTML = 'Today';

    // let cur_project = today.innerHTML

    // today is the default folder

    // const test1 = document.createElement('h3');
    // test1.setAttribute('class', 'test-text');
    // test1.innerHTML = 'test1'

    // const test2 = document.createElement('h3');
    // test2.setAttribute('class', 'test-text');
    // test2.innerHTML = 'test2'

    folder_div.appendChild(header)
    folder_div.appendChild(project_div_input)
    // folder_div.appendChild(today)
    folder_div.appendChild(project_div)

    // container.appendChild(icon_div)
    container.appendChild(folder_div)

    // overlay.appendChild(container)

    let allProjects = Task.show_project();
    // render all projects when menu button is clicked
    for (let i = 0; i < allProjects.length; i++){
        // console.log(todoItems_project[i],'cur_pro list')
        // loop through each todo in current project by key(project)
        for (let key of Object.keys(allProjects[i])) { 
            // console.log(key,'cur project name')
            // loop through each item in current todo 
            let projectName = renderEachFolder(key)
            project_div.appendChild(projectName)
        }
    }
    

    // totally works
    // close project
    // remove_btn.addEventListener('click', (e) => {
    //     closeItem(overlay)
    //     // overlay.display = overlay.display === 'block' ? 'none' : 'block'
    // })

    const folder_add = document.querySelector('#add-folder-icon')

    folder_add.addEventListener('click', (e) => {

        // if (overlay.classList.contains('no-display')){
        //     overlay.classList.remove('no-display')
        // }
        // console.log('meow')
        
        if (project_div_input.classList.contains('no-display')){
            console.log('meow')
            project_div_input.classList.remove('no-display')
        }

        else{
            closeItem(project_div_input)
        }
        
        // overlay.display = overlay.display === 'block' ? 'none' : 'block'
    })

    add_btn.addEventListener('click', (e) =>{
        // if project_input.classs?
        // console.log(project_div_input)
        if (project_input.value !== '' && Task.add_project(project_input.value)){
            let newProject = renderEachFolder(project_input.value)
            project_div.appendChild(newProject)
            project_input.value = ''
            closeItem(project_div_input)
            closeItem(overlay)
            
        }

        else{
            console.log('already exist or invalid value')
        }
        
    })

    cancel_box.addEventListener('click', e => {
        closeItem(project_div_input) 
               
    })

    return container

    
}

function renderEachFolder(project_name) {
    console.log(project_name,'project_name')
    const project_title = document.createElement('button');
    project_title.setAttribute('class', 'btn project-title d-block my-2');
    project_title.innerHTML = project_name
    Task.cur_project = project_name
    console.log(Task.cur_project,'just added project')
    // project_name.value = ''
    project_title.addEventListener('click', e => {
        // console.log(Task.cur_project,'Task.cur_project')
        let previous_project = Task.cur_project
        // console.log(project_name,'project clicked')
        // clean up projects being displayed
        // console.log(e.target.innerHTML)
        Task.remove_project(previous_project)
        Task.display_todo(project_name)
               
    })
    return project_title
    
}

export default displayFolder