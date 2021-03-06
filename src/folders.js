import closeItem from "./close.js"
import Task from "./task.js"
import render_Todo from "./renderTodo.js"
import remove_cur_todos from "./RemoveTodos.js"
import renderEachFolder from "./renderFolder.js"
import setLocalStorage from "./localstorage.js"


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

    // display when width < 576px and ≥1200px
    const header_div = document.createElement('div');
    header_div.setAttribute('class', 'd-flex d-md-none d-xl-flex flex-wrap mb-3');

    const header = document.createElement('button');
    header.setAttribute('class', 'btn folder-heder');
    header.innerHTML = 'Current Project'

    const arrow_text = document.createElement('p');
    arrow_text.setAttribute('class', 'arrow_text folder-heder px-4');
    arrow_text.innerHTML = '->'

    const cur_project_name = document.createElement('p');
    cur_project_name.setAttribute('class', 'cur-project-name folder-heder');
    cur_project_name.innerHTML = Task.get_current_project(); ////////////////////

    // display when 576px < width < 1200px
    const header_div_lg = document.createElement('div');
    header_div_lg.setAttribute('class', 'd-none d-md-block d-xl-none d mb-4 text-center');

    const header_lg = document.createElement('button');
    header_lg.setAttribute('class', 'btn folder-heder');
    header_lg.innerHTML = 'Current Project'

    const arrow_text_lg = document.createElement('p');
    arrow_text_lg.setAttribute('class', 'arrow_text folder-heder px-4');
    arrow_text_lg.innerHTML = '↓'

    const cur_project_name_lg = document.createElement('p');
    cur_project_name_lg.setAttribute('class', 'cur-project-name-lg folder-heder');
    cur_project_name_lg.innerHTML = Task.get_current_project();

    header_div.appendChild(header)
    header_div.appendChild(arrow_text)
    header_div.appendChild(cur_project_name)
    header_div_lg.appendChild(header_lg)
    header_div_lg.appendChild(arrow_text_lg)    
    header_div_lg.appendChild(cur_project_name_lg)

    const project_div = document.createElement('div');
    project_div.setAttribute('class', 'project-div border py-1');

    const project_div_p = document.createElement('p');
    project_div_p.setAttribute('class', 'project-div-p');
    project_div_p.innerHTML = 'ALL PROJECTS'

    project_div.appendChild(project_div_p)

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
    // add_btn.type = 'submit'

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

    folder_div.appendChild(header_div)
    folder_div.appendChild(header_div_lg)
    // folder_div.appendChild(header)
    folder_div.appendChild(project_div_input)
    // folder_div.appendChild(today)
    folder_div.appendChild(project_div)

    // container.appendChild(icon_div)
    container.appendChild(folder_div)

    // overlay.appendChild(container)

    // let allProjects = Task.show_project();
    // // render all projects when menu button is clicked
    // for (let i = 0; i < allProjects.length; i++){
    //     // console.log(todoItems_project[i],'cur_pro list')
    //     // loop through each todo in current project by key(project)
    //     for (let key of Object.keys(allProjects[i])) { 
    //         // console.log(key,'cur project name')
    //         // loop through each item in current todo 
    //         let projectName = renderEachFolder(key)
    //         project_div.appendChild(projectName)
    //     }
    // }


    // display each folder
    // Displayfolder function only gets called one time so this whole chunk of localStorage line can be placed here
    // setLocalStorage.renderEachProjectFromLocalStorage();

    // display todo of current project
    // console.log(Task.get_current_project(),'cur project before todos are displayed')
    // setLocalStorage.renderTodoFromLocalStorage(Task.get_current_project())

    // display each folder
    // Displayfolder function only gets called one time so this whole chunk of localStorage line can be placed here
    if (localStorage.length > 0){          
        console.log(localStorage, 'very first localstorage')  
        console.log(localStorage.length,'localStorage.length displaying folder')
        Object.keys(localStorage).forEach(function(key){

            /////// cur project is the previous one fix it
            console.log(key,'print each project from folder.js', Task.get_current_project(), 'cur_project denotes previosu project at this point');

            let desirialize_key = JSON.parse(key)
            // display each folder
            let projectName = renderEachFolder(desirialize_key)
            project_div.appendChild(projectName)

            // update todolist 
            Task.add_project(desirialize_key)

            // update hashset and add project to it
            Task.hashset.add(desirialize_key)

         
            //////////////////////////////////// edit and create another project but todos are not store after fresh in a newly created project


            // update todoitemlist as well
            // Task.add_project(desirialize_key)

            // for (let todo of localStorage[key]){
            //     if (todo.curProject === true){
            //         cur_project_name.innerHTML = desirialize_key
            //     }
            // }
            // console.log(localStorage.getItem(key)); get value
        });

        // display todo of current project
        // first item in localstorage is the default item 
        setLocalStorage.renderTodoFromLocalStorage(JSON.parse(localStorage.key(0)))
        Task.change_current_project(JSON.parse(localStorage.key(0)))     
        Task.add_todo_from_localstorage()   
    
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
           
            project_div_input.classList.remove('no-display')
        }

        else{
            project_input.value = '';
            closeItem(project_div_input)
        }
        
        // overlay.display = overlay.display === 'block' ? 'none' : 'block'
    })

    // when add_btn clicked, project gets added
    add_btn.addEventListener('click', (e) =>{
        // if project_input.classs?
        // console.log(project_div_input)
        if (project_input.value !== '' && Task.add_project(project_input.value)){
            let newProject = renderEachFolder(project_input.value)
            project_div.appendChild(newProject)
            cur_project_name.innerHTML = project_input.value;
            cur_project_name_lg.innerHTML = project_input.value;

            // update setLocalStorage by adding a newly created project
            setLocalStorage.addNewProjectToLocalStorage(project_input.value)

            // new project added so make todos currently displayed disappear
            remove_cur_todos()

            project_input.value = '';
            closeItem(project_div_input)
            closeItem(overlay)
            
        }

        else{

            // warning box
            const warning_textbox = document.createElement('div')
            warning_textbox.setAttribute('class','warning-textbox bg-light border text-center no-display p-2')

            const warning = document.createElement('p')
            warning.setAttribute('class','warning-text')
            warning.innerHTML = 'input field required'
            const ok_Btn = document.createElement('button');
            ok_Btn.innerHTML = 'OK'
            ok_Btn.setAttribute('class','ok_btn')

            warning_textbox.appendChild(warning)
            warning_textbox.appendChild(ok_Btn)

            project_div_input.appendChild(warning_textbox)

            if (warning_textbox.classList.contains('no-display')){           
                warning_textbox.classList.remove('no-display')
            }

            if (!project_input.classList.contains('border-danger')){
                project_input.classList.add('border-danger')
                project_input.classList.add('border')                
            }

            ok_Btn.addEventListener('click', e => {
                closeItem(warning_textbox)
                project_input.classList.remove('border-danger')
                project_input.classList.remove('border')           
            });
            
        }
        
    })

    cancel_box.addEventListener('click', e => {
        // reset value
        project_input.value = ''
        closeItem(project_div_input) 
               
    })

    return container

    
}

export default displayFolder