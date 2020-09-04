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

    // pop up trash icon
    menu_btn.addEventListener('click', e => {
        if (remove.classList.contains('no-display')){
            remove.classList.remove('no-display')
        }

        else{
            closeItem(remove)
        }
    });

    // trash icon clicked and remove project from todo list
    remove.addEventListener('click', e => {
        const cur_project_title = document.querySelector('.cur-project-name')
        const cur_project_title_lg = document.querySelector('.cur-project-name-lg')
        console.log(e.target,'remove clicked')
        let cur_node = e.target
        // had to use loop because either of button or i can be clicked and handle both cases
        while (!cur_node.classList.contains('project-title-div')){
            // console.log(cur_node)
            cur_node = cur_node.parentNode
        }
        console.log(cur_node.firstChild.innerHTML, 'cur_node.firstChild')
        
        Task.remove_project() //cur_node.firstChild.innerHTML is cur prject name


        // make selected project disappear from display
        cur_node.remove() // cur_node denotes the whole div of todos
        console.log(cur_node)
        setLocalStorage.removeProjectFromLocalStorage(cur_node.firstChild.innerHTML)

        //////////////// project needs to be changed
        // let curProject = Task.get_current_project()
        // console.log(curProject, 'current project before project is removed Task.cur_project')
        // when there is no project, show nothing
        if (localStorage.length == 0){
            remove_cur_todos()
            cur_project_title.innerHTML = '';
            cur_project_title_lg.innerHTML = '';
            Task.change_current_project('')

        }

        // project diplays only changes when cur_project removes
        else{
            
            ///////// everytime you need to check cur_project, it must be returned from class function so it is updated
            //  if cur_project is clicked, get the first project in localstorage,
            if (cur_node.firstChild.innerHTML == Task.get_current_project()){

                remove_cur_todos() // before change project, remove current todos from display

                console.log('/////////// cur project and removed pro are same')
                Task.change_current_project(JSON.parse(localStorage.key(0)))
                cur_project_title.innerHTML = JSON.parse(localStorage.key(0)); // first project in localstorage will be current project
                cur_project_title_lg.innerHTML = JSON.parse(localStorage.key(0));

                // display new current project's todos
                Task.Display_todo(Task.get_current_project())
            }
        
            console.log(localStorage,'localStorage')
        }
        console.log(Task.get_current_project(), 'current project after project is removed') 
    
    });

    
    // project clicked and chagne change project 
    project_title.addEventListener('click', e => {

        // project_name is just clicked and becomes a new projec
        // e.target.innerHTML is same as project_name

        const cur_project_title = document.querySelector('.cur-project-name')
        const cur_project_title_lg = document.querySelector('.cur-project-name-lg')
        console.log(Task.cur_project,'previous_project before changed')
        let previous_project = Task.get_current_project()
        console.log(project_name,'project clicked')
        // clean up projects being displayed
        // console.log(e.target.innerHTML,'project clicked')
        // remove all todos that are currently displayed
        remove_cur_todos() // folder.js -> removotodo.js

        Task.Display_todo(project_name) // folder.js -> task.js -> render_Todo.js
        Task.change_current_project(project_name)

        // change current project name right next to project text
        console.log(cur_project_title.innerHTML,'cur_project_title.innerHTML before displaed project gets replaced by new one')
        // when there is no project, show nothing
        cur_project_title.innerHTML = project_name
        cur_project_title_lg.innerHTML = project_name

        // how to change current project, one liner did not work, you have to return the value.
        console.log(Task.get_current_project(),'Task.cur_project after changed')
        console.log(Task.show_project(), 'todolist after project changed')


        // setLocalStorage.renderTodoFromLocalStorage()
               
    })
    return project_title_div
    
}

export default renderEachFolder