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
        console.log('json project name string before going into localstorage',project_json)
        let new_array = []
        let todolist_json = JSON.stringify(new_array)
		// push object to localStorage, key is book id, value is book object
        localStorage.setItem(project_json, todolist_json);
        console.log(localStorage,'local storage from addNewProjectToLocalStorage')
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

        // ///////////////////////////////     after page refreshes, todos are all gone
        console.log(Task.get_current_project(),'cur_project right before localstorage gets todo')
        localStorage.setItem(JSON.stringify(Task.get_current_project()),existing_todos_json)
    }

    const editTodoLocalStorage = (given_todo) => {
        if (localStorage.length > 0){            
            console.log('cur_todo from edit localstorage executed')
            Object.keys(localStorage).forEach(function(key){ 
               
                let cur_todos = JSON.parse(localStorage.getItem(key)) // grab whole todos of project 
                console.log(cur_todos,'cur_todo from edit localstorage')
                for (let todo of cur_todos) {
                    // let cur_todo = JSON.parse(todo)
                    if (todo.id == given_todo.id) {
                        // ////////////////////////////  edit posed for now
                        todo.title = given_todo.title
                        todo.desc = given_todo.desc
                        todo.date = given_todo.date
                        todo.start = given_todo.start
                        todo.end = given_todo.end
                        todo.priority = given_todo.priority
                        todo.edit = true;

                        // retrieve the old list, append to it, then save it back to localStorage
                        localStorage.removeItem(key)
                        localStorage.setItem(key,JSON.stringify(cur_todos))

                    }
                   
                }
            });
        
        }
    }

    const removetodoFromLocalStorage = (id) =>{
        if (localStorage.length > 0){
            
            Object.keys(localStorage).forEach(function(key){ 
               
                let cur_todos = JSON.parse(localStorage.getItem(key)) // grab whole todos of project 
                // console.log(cur_todos,'cur_todo from edit localstorage ln167')
                let cnt = 0
                for (let todo of cur_todos) {
                    // let cur_todo = JSON.parse(todo)
                    if (todo.id == id) {
                        console.log('removetodoFromLocalStorage excuted')
                        cur_todos.splice(cnt,1)
                        // retrieve the old list, append to it, then save it back to localStorage
                        localStorage.removeItem(key)
                        localStorage.setItem(key,JSON.stringify(cur_todos))
                        return

                    }

                    cnt++
                   
                }
            });

        }
        
    }

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
            addNewTodoToLocalStorage,
            removetodoFromLocalStorage,
            editTodoLocalStorage
            }
	
	
}());

export default setLocalStorage