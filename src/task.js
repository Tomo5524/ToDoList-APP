
const Task = () => {

    let todoItems_project = [];
    let todoItems_date = [];

    const getObj = (title,desc,note,date,start,end,priority) => {
        let taskobj = {
            title,
            desc,
            note,
            date,
            start,
            end,
            priority,
            check : false,  
            id : Date.now()
        }

        return taskobj

    }
    // When a todo is marked as completed, we’ll toggle the checked property to true, and when the user deletes a todo, we’ll locate the todo item in the array using its id

    const getTask = (given_id) => {
        for (let todo of todoItems_date) {
            if (todo.id === given_id){
                return todo
            }
        }
    }

    const add_task = (function(title,desc,note,date,start,end,priority)  {
        const new_obj = {
            title,
            desc,
            note,
            date,
            start,
            end,
            priority,
            check : false,  
            id : Date.now()
        }

        todoItems_project.push(new_obj)
        todoItems_date.push(new_obj)
    })();

    const print_hiya = () => {
        console.log('print hiya')
    }

    const show_project = () => todoItems_project

    // console.log('class created')
    // return {title,desc,note,date,start,end,priority}
    
    return {todoItems_project, todoItems_date, getObj, getTask, getObj, add_task, print_hiya, show_project}
}

export default Task