
const Task = (title,desc,note,date,start,end,priority) => {

    let todoItems_project = [];
    let todoItems_date = [];

    const taskObj = {
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
    // When a todo is marked as completed, we’ll toggle the checked property to true, and when the user deletes a todo, we’ll locate the todo item in the array using its id

    const getTask = (given_id) => {
        for (let todo of todoItems_date) {
            if (todo.id === given_id){
                return todo
            }
        }
    }

    // const getObj = (title,desc,note,date,start,end,priority) => {
        
    // }

    const add_task = () => {
        // const new_obj = {
        //     title,
        //     desc,
        //     note,
        //     date,
        //     start,
        //     end,
        //     priority,
        //     check : false,  
        //     id : Date.now()
        // }
        todoItems_project.push(taskObj)
        todoItems_date.push(taskObj)
    }

    // const add_task = (taskObj) => {
    //     todoItems_project.push(taskObj)
    //     todoItems_date.push(taskObj)
    // }

    const show_project = () => todoItems_project

    const show_task = () => taskObj
    // console.log('class created')
    // return {title,desc,note,date,start,end,priority}
    return {todoItems_project, todoItems_date, getTask, add_task, show_project, show_task}
}

export default Task