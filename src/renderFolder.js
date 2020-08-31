import closeItem from "./close.js"
import Task from "./task.js"
import remove_cur_todos from "./RemoveTodos.js"
import setLocalStorage from "./localstorage";

function renderEachFolder(project_name) {
    console.log(project_name,'project_name')
    const project_title_div = document.createElement('div');
    project_title_div.setAttribute('class', 'project-title-div d-flex flex-wrap my-2');
    const project_title = document.createElement('button');
    project_title.setAttribute('class', 'btn project-title');
    const remove = document.createElement('button')
    remove.setAttribute('class', 'btn remove-btn no-display');
    const remove_btn = document.createElement('i')
    remove_btn.setAttribute('class', "fas fa-trash-alt");
    remove.appendChild(remove_btn)

    project_title_div.appendChild(project_title)
    project_title_div.appendChild(remove)
    
    project_title.innerHTML = project_name
    Task.cur_project = project_name
    console.log(Task.cur_project,'just added project')

    const menu_btn = document.querySelector('.menu-btn')

    menu_btn.addEventListener('click', e => {
        if (remove.classList.contains('no-display')){
            remove.classList.remove('no-display')
        }

        else{
            closeItem(remove)
        }
    });

    remove.addEventListener('click', e => {
        const cur_project_title = document.querySelector('.cur-project-name')
        console.log(e.target,'remove clicked')
        let cur_node = e.target
        // had to use loop because either of button or i can be clicked and handle both cases
        while (!cur_node.classList.contains('project-title-div')){
            console.log(cur_node)
            cur_node = cur_node.parentNode
        }
        console.log(cur_node.firstChild.innerHTML, 'cur_node.firstChild')
        Task.remove_project(cur_node.firstChild.innerHTML) //cur_node.firstChild.innerHTML is cur prject name
        // make selected project disappear from display
        cur_node.remove()
        setLocalStorage.removeProjectFromLocalStorage(cur_node.firstChild.innerHTML)

        // when there is no project, show nothing
        if (Task.todoItems_project.length == 0){
            cur_project_title.innerHTML = '';
        }

        else if (cur_node.firstChild.innerHTML == Task.cur_project){
            console.log(localStorage,'localStorage')
            let first_project = JSON.parse(localStorage.key(0));
            cur_project_title.innerHTML = first_project;
            ////////////////////////// project name not changed when first item is removed

        }
            
        // }
        // console.log(Task.show_project(),'after project removed')
        //////////////// nothing happens after the line above executed 
    });

    // project_name.value = ''
    project_title.addEventListener('click', e => {
        const cur_project_title = document.querySelector('.cur-project-name')
        console.log(Task.cur_project,'previous_project before changed')
        let previous_project = Task.cur_project
        console.log(project_name,'project clicked')
        // clean up projects being displayed
        // console.log(e.target.innerHTML,'project clicked')
        // remove all todos that are currently displayed
        remove_cur_todos(previous_project) // folder.js -> removotodo.js
        Task.display_todo(project_name) // folder.js -> task.js -> render_Todo.js
        Task.change_current_project(project_name)

        // change current project name right next to project text
        console.log(cur_project_title.innerHTML,'cur_project_title.innerHTML before new name assigned')
        // when there is no project, show nothing
        cur_project_title.innerHTML = project_name

        // how to change current project, one liner did not work, you have to return the value.
        console.log(Task.get_current_project(),'Task.cur_project after changed')
               
    })
    return project_title_div
    
}

export default renderEachFolder