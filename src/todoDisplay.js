import Task from "./task.js"
import renderForm from "./form.js"

const todo_display = () => {

    // const container = document.querySelector('#content')

    const tasks_container = document.createElement('div');
    // container-fluid for a full width container,
    tasks_container.setAttribute('class', 'task-container d-flex align-items-center justify-content-center col-12 col-md-8');

    // display current date and time 
    let d = new Date()
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    // console.log(day)
    // console.log(d.toLocaleString())

    const today_date = document.createElement('div');
    today_date.setAttribute('class', 'today-date d-none d-md-flex');

    const day = document.createElement('h6');
    day.setAttribute('class', 'text-day pr-2');
    day.innerHTML = weekday[d.getDay()]

    const date = document.createElement('h6');
    date.setAttribute('class', 'text-date');
    date.innerHTML = (function () {
        function checkTime(i) {
            return (i < 10) ? "0" + i : i;
        }
    
        function startTime() {
            let today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
            let meridian;
            if (h > 12) {
                meridian = 'PM';
                h -= 12;
            } else if (h < 12) {
                meridian = 'AM';
                if (h == 0) {
                h = 12;
                }
            } else {
                meridian = 'PM';
            }
            date.innerHTML = h + ":" + m + ":" + s + " " + meridian;
            let t = setTimeout(function () {
                startTime()
            }, 500);
        }
        startTime();
    })();

    today_date.appendChild(day)
    today_date.appendChild(date)

    // const today_date = display_Time()

    const todo_list = document.createElement('ul');
    todo_list.setAttribute('class', 'todo-list col-12');

    const empty_state = document.createElement('div');
    // container-fluid for a full width container,
    empty_state.setAttribute('class', 'empty-state');

    const btn_div = document.createElement('div');
    btn_div.setAttribute('class', 'btn-div text-center');

    const add_task = document.createElement('button')
    add_task.setAttribute('class', 'btn add-task-btn');

    const add_task_btn = document.createElement('i')
    add_task_btn.setAttribute('class', "fas fa-calendar-plus fa-3x");

    add_task.appendChild(add_task_btn)
    btn_div.appendChild(add_task)

    const add_text = document.createElement('h2');
    add_text.setAttribute('class', "add-text");
    add_text.innerHTML = "Add your first todo";

    const task_text = document.createElement('p');
    // task_text.setAttribute('class', "add-text");
    task_text.innerHTML = "What do you want to get done today?"
    
    empty_state.appendChild(btn_div)
    empty_state.appendChild(add_text)
    empty_state.appendChild(task_text)

    tasks_container.appendChild(today_date)
    tasks_container.appendChild(todo_list)
    tasks_container.appendChild(empty_state)

    add_task.addEventListener('click', e => {
        
        const form = renderForm(e.target)
        // console.log(form)
        // console.log(e.target)
        content.appendChild(form)
    
        // totally works
        // const div = document.createElement('div')
        // div.setAttribute('class', 'border');
        // div.innerHTML = 'Meow'
        // nav.appendChild(div)
    })
    
    return tasks_container

}

// function display_Time(){
//     // display current date and time 
//     let d = new Date()
//     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//     // console.log(day)
//     // console.log(d.toLocaleString())

//     const cur_date = document.createElement('div');
//     cur_date.setAttribute('class', 'today-date d-flex');

//     const day = document.createElement('h6');
//     day.setAttribute('class', 'text-day pr-2');
//     day.innerHTML = weekday[d.getDay()]

//     const date = document.createElement('h6');
//     date.setAttribute('class', 'text-date');
//     // console.log(d.toLocaleString())
//     date.innerHTML = d.toLocaleString()

//     cur_date.appendChild(day)
//     cur_date.appendChild(date)

//     setTimeout(display_Time, 1000); 

//     return cur_date
// }

export default todo_display