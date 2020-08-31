import Task from "./task.js"
import renderForm from "./form.js";
import render_Todo from "./renderTodo.js";
import renderEachFolder from "./renderFolder.js"

const setLocalStorage = (function() {
    
    // all localstorage items are handled by key ('project name')
    // each todo is handled in values (list) so it wont be handled in this moduler 
    
    const renderTodoFromLocalStorage = () => {
        if (localStorage.length > 0){
            // for (const property in localStorage){ this one loops over all the properties in localStorage
            // loop through keys
            for (let i = 0; i < localStorage.length; i++){
                console.log(localStorage[i],'cur_pro from local storage')
                // loop through each todo in current project by key(project)
                for (let key of Object.keys(localStorage[i])) { 
                    console.log(key,'cur project name from localstorage')
                    // loop through each item in current todo 
                    for (let todo of localStorage[i][key]){ 
                        let desirialize_obj = JSON.parse(todo);
                        render_Todo(desirialize_obj)
                    }
                }
            }
        }
    }

    const addNewProjectToLocalStorage = (project) => {
        let project_json = JSON.stringify(project)
        console.log('json string before going into localstorage',project_json)
        let new_array = []
        let todolist_json = JSON.stringify(new_array)
		// push object to localStorage, key is book id, value is book object
        localStorage.setItem(project_json, todolist_json);
        console.log(localStorage)
    }

    const removeProjectFromLocalStorage = (project) => {
        console.log(project)
        let remove_project = JSON.stringify(project)
        console.log(remove_project)
        localStorage.removeItem(remove_project)
    } 

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
            addNewProjectToLocalStorage,
            removeProjectFromLocalStorage
            }
	
	
}());

export default setLocalStorage