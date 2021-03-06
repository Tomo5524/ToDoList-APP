import render_Todo from "./renderTodo";
import setLocalStorage from "./localstorage";

const Task = (function() {

    let todoItems_project = [];
    let todoItems_date = [];

    // const getObj = (title,desc,date,start,end,priority) => {
    //     // get id and loop through it to get obj
    //     let taskobj = {
    //         title,
    //         desc,
    //         date,
    //         start,
    //         end,
    //         priority,
    //         check : false,  
    //         id : Date.now()
    //     }

    //     return taskobj

    // }
    // When a todo is marked as completed, we’ll toggle the checked property to true, and when the user deletes a todo, we’ll locate the todo item in the array using its id

    const getTask = (given_id) => {

         // form of todolist 
        // 0:
        //   3: Array(1)
        //     0: {title: "ad", desc: "", date: "", start: "", end: "", …}

        console.log(todoItems_project,'from gettask task.js')
        // loop through each project by index
        for (let i = 0; i < todoItems_project.length; i++){
            console.log(todoItems_project[i],'cur_pro list from gettask task.js')
            // loop through each key in current project by key(project)
            for (let key of Object.keys(todoItems_project[i])) { 
                console.log(key,'cur project name from gettask task.js')
                // loop through each item in current todo 
                for (let todo of todoItems_project[i][key]){ 
                    // console.log(todo,'cur_obj')
                    if (todo.id === given_id){
                        console.log(todoItems_project[i][key],'returned todo from gettask task.js')
                        // todoItems_project[i][key] = all todo in key(project name)
                        console.log(typeof todo)
                        return todo
                    }
                }
            }
        }
        
    }

    let hashset = new Set()
    let cur_project = JSON.parse(localStorage.key(0));
    // let default_project = {};
    // default_project[cur_project] = []
    // todoItems_project.push(default_project)

    const get_current_project = () => {
        return cur_project
    } 

    // const show_project = () => todoItems_project
    function show_project(){
        return todoItems_project
    }

    // const change_current_project = (new_p) => cur_project doesn't work
    const change_current_project = (new_p) => {
        cur_project = new_p
        // console.log(cur_project,'cur_project from task.js')
        return cur_project
    }

    const change_todolist = (new_list) => {
        todoItems_project = new_list
        // console.log(cur_project,'cur_project from task.js')
        return todoItems_project
    }

    const add_project = (new_project) => {

        // project is already in local storage that is why after refresh, nothing stored?

        console.log(new_project,'new_project add_project executed')
        // avoild duplicate projects
        if (hashset.has(new_project)){
            return false
        }

        else{
            hashset.add(new_project)
            let new_obj_project = {}
            new_obj_project[new_project] = []
            // console.log(new_obj_project,'new_obj_project')
            todoItems_project.push(new_obj_project)
            // can add a new project
            cur_project = new_project // change current project 
            console.log(cur_project,'cur_project after add project executed') 

            /////////////////////////////////////////////////////
            // addd new project to localstorage
            // no need cuz its already in it
            //////// what about after program runs and adds todo 
            // setLocalStorage.addNewProjectToLocalStorage(new_project)

            // console.log(todoItems_project,'todoItems_project')
            return true
        }

    }

    const add_task = (title,desc,date,start,end,priority) => {
        const new_obj = {
            title,
            desc,
            date,
            start,
            end,
            priority,
            completed : false,
            edit : false,
            currently_project : false,
            id : Date.now()
        };

        // key is integer so needs index to loop through each project file
        // console.log(get_current_project(),'get curproject')
        for (let i = 0; i < todoItems_project.length; i++){
            for (let key of Object.keys(todoItems_project[i])){
                // console.log(key,'each project')
                
                // two equals evaluates only value not type. 
                if (key == get_current_project()){
                    // console.log('key exists already', cur_project,'cur_project')
                    // console.log(todoItems_project[i][cur_project],'todoItems_project[cur_project]')
                    todoItems_project[i][get_current_project()].push(new_obj) 
                };
            }
        };

        // todoItems_project[cur_project].push(new_obj)
        // todoItems_project.push(new_obj)
        // todoItems_date.push(new_obj)

        console.log(todoItems_project,'todoItems_project, task.js')

        return new_obj
    }
    // const print_hiya = () => {
    //     console.log('print hiya')
    // }

    const remove_todo = (todo) => {

        for (let i = 0; i < todoItems_project.length; i++){
            // console.log(todoItems_project[i],'cur_pro list')
            // loop through each todo in current project by key(project)
            for (let key of Object.keys(todoItems_project[i])) { 
                // console.log(key,'cur project name')
                // loop through each item in current todo 
                let ind = 0;
                for (let obj of todoItems_project[i][key]){ 
                    // console.log(obj,'cur_obj')
                    // console.log(todo.id,'todo.id')
                    // console.log(obj.id,'obj.id')
                    if (todo.id == obj.id){
                        todoItems_project[i][key].splice(ind, 1);
                        console.log(todoItems_project[i][key],'cur project todos after removed')
                        return 
                    }
                    ind++
                }
            }
        }

        
    };


    const add_todo_from_localstorage = () => {
        console.log(show_project(),'todo list add_todo_from_localstorage just executed')

        for (let i = 0; i < todoItems_project.length; i++){
            for (let cur_key of Object.keys(todoItems_project[i])){
                    
                let existing_todos = JSON.parse(localStorage.getItem(JSON.stringify(cur_key))); // get a whole list (todos) of current project
                // console.log(existing_todos,'existing_todos from addNewTodoToLocalStorage')
                // todoItems_project[i][cur_key].push(existing_todos) ////////
                /// above line appends list to list so it was nested 

                todoItems_project[i][cur_key] = existing_todos;

                console.log(show_project(),'todo list right after add_todo_from_localstorage executed')
            
            }
        };
    }

    // const remove_current_todos = (project) =>{
    //     for (let i = 0; i < todoItems_project.length; i++){
    //         // console.log(todoItems_project[i],'cur_pro list')
    //         // loop through each todo in current project by key(project)
    //         for (let key of Object.keys(todoItems_project[i])) { 
    //             // console.log(key,'cur project name')
    //             // loop through each item in current todo 
    //             if (key == project){
                    
    //                 for (let obj of todoItems_project[i][key]){

    //                 }
    //                 console.log(todoItems_project,'after project removed')
    //                 // todoItems_project.splice(i, 1)
    //             }
    //             // for (let obj of todoItems_project[i][key]){ 
    //             //     // console.log(obj,'cur_obj')
    //             //     // console.log(todo.id,'todo.id')
    //             //     // console.log(obj.id,'obj.id')
    //             //     if (todo.id == obj.id){
    //             //         todoItems_project[i][key].splice(ind, 1);
    //             //         console.log(todoItems_project[i][key],'cur project todos after removed')
    //             //         return 
    //             //     }
    //             //     ind++
    //             // }
    //         }
    //     }

    // }

    const remove_project = (project) => {

        // delete from hashset
        hashset.delete(project)
      
        for (let i = 0; i < todoItems_project.length; i++){
            // console.log(todoItems_project[i],'cur_pro list')
            // loop through each todo in current project by key(project)
            for (let key of Object.keys(todoItems_project[i])) { 
                // console.log(key,'cur project name')
                // loop through each item in current todo 
                if (key == project){
                    console.log(todoItems_project,'after project removed in task.js remove_project ')
                    todoItems_project.splice(i, 1)
                }
                // for (let obj of todoItems_project[i][key]){ 
                //     // console.log(obj,'cur_obj')
                //     // console.log(todo.id,'todo.id')
                //     // console.log(obj.id,'obj.id')
                //     if (todo.id == obj.id){
                //         todoItems_project[i][key].splice(ind, 1);
                //         console.log(todoItems_project[i][key],'cur project todos after removed')
                //         return 
                //     }
                //     ind++
                // }
            }
        }
    }

    const edit_todo = (title,desc,date,start,end,priority,completed,id) => {
        console.log(id,'id') 
        const cur_todo = getTask(id)
        console.log(cur_todo,'cur_todo, called from edit_todo')
        cur_todo.title = title
        cur_todo.desc = desc
        cur_todo.date = date
        cur_todo.start = start
        cur_todo.end = end
        cur_todo.priority = priority
        cur_todo.edit = true;
        // cur_todo.id = Date.now()
        console.log(show_project(),'show all projects')
        return cur_todo
    }

    const Display_todo = (given_project) => {
        // for localstorage display
        for (let i = 0; i < todoItems_project.length; i++){
            // console.log(todoItems_project[i],'cur_pro list')
            // loop through each todo in current project by key(project)
            for (let key of Object.keys(todoItems_project[i])) { 
                // console.log(key,'cur project name')
                // loop through each item in current todo 
                if (key == given_project){
                    console.log(given_project,'given_project in Displaytodo')
                    for (let obj of todoItems_project[i][key]){ 
                        console.log(todoItems_project[i][key],'obj in todoItems_project[i][key] ///////')
                        render_Todo(obj)
                    }
                }
            }
                
        }

        // for (let i = 0; i < todoItems_project.length; i++){
        //     let todo = todoItems_project[i];
        //     render_Todo(todo)
        // }
    }

    // console.log('class created')
    // return {title,desc,note,date,start,end,priority}
    
    return {todoItems_project, 
            todoItems_date,
            cur_project,
            hashset,
            getTask, 
            get_current_project,
            change_current_project,
            change_todolist,
            add_project,
            add_task, 
            remove_todo, 
            add_todo_from_localstorage,
            remove_project,
            show_project,
            edit_todo,
            Display_todo}
})();

export default Task

// add project 

        // // find if name is already used or not
        // console.log(new_project,'new_project')
        // let ind = -1;
        // // console.log(todoItems_project.length)
        // for (var key of Object.keys(todoItems_project)){
        //     console.log(key,'each project')
        //     // console.log(todo.id,'todo.id')

        //     // two equals evaluates only value not type. 
        //     if (key == new_project){
        //         ind = i
        //         return false
        //     }
        // }
        

        // if project doesn' exist already
        // use hashset
    

        // let a = 'key'

        // let obj = {}
        // obj[a] = 'value'

        // console.log(obj)


        // [ [ { project: [{title: "starwars", rate: "yaaas"},
        //                 {title: "harry", rate: "aight"}] } ] 
                    
        // ]
        // let a = []
        // let b = []

        // a.push(b)

        // b[0] = {'project' : []}
        // console.log(a)

        // let obj = {title:'starwars', rate:'yaaas'}
        // let obj_ = {title:'harry', rate:'aight'}

        // b[0]['project'].push(obj)
        // b[0]['project'].push(obj_)

        // console.log(a)

        // console.log(a[0][0]['project'][0].title)
        // console.log(a[0][0]['project'][1].title)


// remove_todo 
// for (let i = 0; i < todoItems_project.length; i++){
        //     console.log(todoItems_project[i],'cur_pro list')
        //     // loop through each todo in current project by key(project)
        //     for (let key of Object.keys(todoItems_project[i])) { 
        //         console.log(key,'cur project name')
        //         // loop through each item in current todo 
        //         // [
        //         //     [0 : {'project':
        //         //         [0 : {title:'title'}]
        //         //         }
        //         //     ]
        //         // ]
        //         console.log(todoItems_project[i][key],'cur project todos')
        //         for (let j = 0; i < todoItems_project[i][key].length; i++){ 
        //             console.log(todoItems_project[i][key][j],'cur_obj')
        //             if (todoItems_project[i][key][j].id == todo.id){
        //                 console.log(todoItems_project[i][key],'todos of cur_projecrt')
        //                 todoItems_project[i][key].splice(index, 1);
        //             }
        //         }
        //     }
        // }


        // console.log(todo.id,'delete_id')
        // let index = -1;
        // // console.log(todoItems_project.length)
        // for (let i = 0; i < todoItems_project.length; i++){
        //     // console.log(todoItems_project[i].id,'odoItems_project[i].id')
        //     // console.log(todo.id,'todo.id')

        //     // two equals evaluates only value not type. 
        //     if (todoItems_project[i].id == todo.id){
        //         index = i
        //     }
        // }
        // // const index = todoItems_project.indexOf(todo.id);
        // // console.log(index,'index')
        // if (index > -1) {
        //     todoItems_project.splice(index, 1);
        //     // console.log(todoItems_project,'remov project')
        // }