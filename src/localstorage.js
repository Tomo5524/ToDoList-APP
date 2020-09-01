import Task from "./task.js"
import renderForm from "./form.js";
import render_Todo from "./renderTodo.js";
import renderEachFolder from "./renderFolder.js"

const setLocalStorage = (function() {
    
    // all localstorage items are handled by key ('project name')
    // each todo is handled in values (list) so it wont be handled in this moduler 
    
    const renderTodoFromLocalStorage = (project) => {

        console.log('renderTodoFromLocalStorage executed')
        let todos = JSON.parse(localStorage.getItem(JSON.stringify(project))); // get a whole list that contains todos that belong to current key
        console.log(todos, 'local storage todo from renderTodoFromLocalStorage')
        for (let todo of todos) {
            // let cur_todo = JSON.parse(todo)
            render_Todo(todo)
            // add todo to todolist
            // id will be overwritten
            Task.add_task_from_localstorage(todo)
        }
        

        // get and render all todos without any input
        // for(var i =0; i < localStorage.length; i++){
        //     let cur_key = localStorage.getItem(localStorage.key(i));
        //     let todos = JSON.parse(localStorage.getItem(JSON.stringify(cur_key))); // get a whole list that contains todos that belong to current key
        //     for (let todo of todos) {
        //         let cur_todo = JSON.parse(todo)
        //         render_Todo(cur_todo)
        //     }
        //   }

        // Object.keys(localStorage).forEach(function(key){
        //     console.log(key);
        //     let existing_todos = JSON.parse(localStorage.getItem(JSON.stringify(Task.get_current_project())));
        //     let desirialize_key = JSON.parse(key)
        //     let projectName = renderEachFolder(desirialize_key)
        //     project_div.appendChild(projectName)

        //     // update todoitemlist as well
        //     // Task.add_project(desirialize_key)

        //     // for (let todo of localStorage[key]){
        //     //     if (todo.curProject === true){
        //     //         cur_project_name.innerHTML = desirialize_key
        //     //     }
        //     // }
        //     // console.log(localStorage.getItem(key)); get value


        //  });
        // if (localStorage.length > 0){
        //     // for (const property in localStorage){ this one loops over all the properties in localStorage
        //     // loop through keys
        //     for (let i = 0; i < localStorage.length; i++){
        //         console.log(localStorage[i],'cur_pro from local storage')
        //         // loop through each todo in current project by key(project)
        //         for (let key of Object.keys(localStorage[i])) { 
        //             console.log(key,'cur project name from localstorage')
        //             // loop through each item in current todo 
        //             for (let todo of localStorage[i][key]){ 
        //                 let desirialize_obj = JSON.parse(todo);
        //                 render_Todo(desirialize_obj)
        //             }
        //         }
        //     }
        // }
    }

    const renderEachProjectFromLocalStorage = () => {
        
        const projectDiv = document.querySelector(".project-div");
        // console.log(projectDiv)
        if (localStorage.length > 0){            

            Object.keys(localStorage).forEach(function(key){ 
                // console.log(key);
                let desirialize_key = JSON.parse(key)
                let projectName = renderEachFolder(desirialize_key)
                
                projectDiv.appendChild(projectName)
                // update todoitemlist as well
                // Task.add_project(desirialize_key)

                // for (let todo of localStorage[key]){
                //     if (todo.curProject === true){
                //         cur_project_name.innerHTML = desirialize_key
                //     }
                // }
                // console.log(localStorage.getItem(key)); get value
            });
        
        }
    }

    const addNewProjectToLocalStorage = (project) => {
        let project_json = JSON.stringify(project)
        console.log('json string before going into localstorage',project_json)
        let new_array = []
        let todolist_json = JSON.stringify(new_array)
		// push object to localStorage, key is book id, value is book object
        localStorage.setItem(project_json, todolist_json);
        console.log(localStorage,'local storage')
    }

    const removeProjectFromLocalStorage = (project) => {
        console.log(project,'project name in remove localstorage project function')
        let remove_project = JSON.stringify(project)
        console.log(remove_project, 'json project name in remove localstorage project function')
        localStorage.removeItem(remove_project)
    } 

    const addNewTodoToLocalStorage = (todo) => {
        // add new task to localStorage

        let existing_todos = JSON.parse(localStorage.getItem(JSON.stringify(Task.get_current_project()))); // get a whole list (todos) of current project
        console.log(existing_todos,'existing_todos from addNewTodoToLocalStorage')
        existing_todos.push(todo)
        let existing_todos_json = JSON.stringify(existing_todos)
        console.log(existing_todos_json,'existing_todos_json from addNewTodoToLocalStorage')
        // localStorage.removeItem(JSON.stringify(Task.get_current_project()))

        // ///////////////////////////////   after page refreshes, todos are all gone

        localStorage.setItem(JSON.stringify(Task.get_current_project()),existing_todos_json)
    }

    // const editTodoLocalStorage = (todo) => {

    // }

    // const removetodoFromLocalStorage = (id) =>{
        
    // }

    // const renderProjectfromLocalStorage = () => {
    //     if (localStorage.length > 0){
    //         // for (const property in localStorage){ this one loops over all the properties in localStorage
    //         // loop through keys


    //         Object.keys(localStorage).forEach(function(key){
    //             console.log(key);
    //             renderEachFolder(key)
    //             // console.log(localStorage.getItem(key)); get value
    //          });

    //     }
    // }



    return {renderTodoFromLocalStorage,
            renderEachProjectFromLocalStorage,
            addNewProjectToLocalStorage,
            removeProjectFromLocalStorage,
            addNewTodoToLocalStorage
            }
	
	
}());

export default setLocalStorage