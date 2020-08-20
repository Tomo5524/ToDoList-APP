import render_Todo from "./renderTodo";

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
        for (let todo of todoItems_date) {
            if (todo.id === given_id){
                return todo
            }
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
            check : false,  
            id : Date.now()
        }

        todoItems_project.push(new_obj)
        todoItems_date.push(new_obj)

        return new_obj
    };

    // const print_hiya = () => {
    //     console.log('print hiya')
    // }

    const remove_todo = (todo) => {
        // console.log(todo.id,'delete_id')
        let index = -1;
        // console.log(todoItems_project.length)
        for (let i = 0; i < todoItems_project.length; i++){
            // console.log(todoItems_project[i].id,'odoItems_project[i].id')
            // console.log(todo.id,'todo.id')

            // two equals evaluates only value not type. 
            if (todoItems_project[i].id == todo.id){
                index = i
            }
        }
        // const index = todoItems_project.indexOf(todo.id);
        // console.log(index,'index')
        if (index > -1) {
            todoItems_project.splice(index, 1);
            // console.log(todoItems_project,'remov project')
        }
    };

    // const show_project = () => todoItems_project
    function show_project(){
        return todoItems_project
    }

    const display_todo = () => {
        // for localstorage display
        for (let i = 0; i < todoItems_project.length; i++){
            let todo = todoItems_project[i];
            render_Todo(todo)
        }
    }

    // console.log('class created')
    // return {title,desc,note,date,start,end,priority}
    
    return {todoItems_project, 
            todoItems_date, 
            getTask, 
            add_task, 
            remove_todo, 
            show_project,
            display_todo}
})();

export default Task