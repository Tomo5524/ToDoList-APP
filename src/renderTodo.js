import todo_display from "./todoDisplay.js"
import Task from "./task.js"
import getTime from "./time.js"
import renderForm from "./form.js"


const render_Todo = (...args) => {

    // const ul = container.childNodes[0] // does not work
    // console.log(args[1],'arg1 - element')
    const obj = args[0]
    const ul = document.querySelector('.todo-list');
    // console.log('ul here')
    // console.log(ul)
    // ul.innerHTML = 'hiya'

    // add task
    // how to get task
    // let l = Task()
    // l.add_task(title_box.value.trim(),dscr_box.value.trim(),note_box.value.trim(),date_box.value,start.value,end.value,priority.value)
    const node = document.createElement("li");
    node.setAttribute('id', `${obj.id}`);
    node.setAttribute('class', 'd-flex justify-content-between align-items-center py-3 border rounded');

    const check_box = document.createElement("input");
    check_box.setAttribute('type', 'checkbox');
    check_box.setAttribute('id', `${obj.id}`);
    check_box.setAttribute('class', 'check-box no-display');

    const check_label = document.createElement("label");
    check_label.setAttribute('id', `${obj.id}`);
    check_label.setAttribute('class', 'tick ml-3');

    const text_div = document.createElement("div");
    text_div.setAttribute('class', 'text-div w-100 text-center');

    const text = document.createElement("h3");
    text.setAttribute('class','text-title')
    text.innerHTML = obj.title
   
    const tex_dscr = document.createElement("p");
    tex_dscr.setAttribute('class','todo-description')
    tex_dscr.innerHTML = obj.desc

    const start_end_div = document.createElement("div");
    start_end_div.setAttribute('class','start-end-div d-flex justify-content-center');

    if (obj.start !== '' && obj.end !== ''){
        const start_text = document.createElement("p");
        start_text.setAttribute('class','todo-start-time')
        // console.log(obj.start)
        start_text.innerHTML = 'Start: ' + getTime(obj.start);

        const end_text = document.createElement("p");
        end_text.setAttribute('class','todo-end-time pl-5')
        end_text.innerHTML = 'End: ' + getTime(obj.end);

        start_end_div.appendChild(start_text)
        start_end_div.appendChild(end_text)
    }

    text_div.appendChild(text)
    text_div.appendChild(tex_dscr)
    text_div.appendChild(start_end_div)

    const icon_div = document.createElement("div");
    icon_div.setAttribute('class','icon-div d-flex');

    const edit_btn = document.createElement("button");
    edit_btn.setAttribute('class', 'btn edit-btn');
    // edit_btn.setAttribute('id', `${obj.id}`);
    edit_btn.style = 'background-color: Transparent'

    const edit_icon = document.createElement("i");
    edit_icon.setAttribute('class', "fas fa-edit");
    // edit_icon.setAttribute('id', `${obj.id}`);
    
    edit_btn.appendChild(edit_icon)

    const delete_btn = document.createElement("button");
    delete_btn.setAttribute('class', 'btn delete-btn');

    const delete_icon = document.createElement("i");
    delete_icon.setAttribute('class', "fas fa-trash-alt");

    delete_btn.appendChild(delete_icon)

    icon_div.appendChild(edit_btn)
    icon_div.appendChild(delete_btn)

    node.appendChild(check_box)
    node.appendChild(check_label)
    node.appendChild(text_div)
    node.appendChild(icon_div)
    // setattribute('id', task.id)

    // const l = Task()
    // console.log('see projects')
    // console.log(l.show_project())

    // create controller that handles all addEventListener?

    // if todo is created for the first time, append new list
    // if (!obj.edit){
    //     console.log('edit added')
    //     ul.appendChild(node)
    // }

    check_label.addEventListener('click', e => {
        obj.completed = obj.completed ? false : true;
        // add check mark
        if (obj.completed) {
            check_label.innerHTML = '✓';
            // check_label.innerHTML = '😄';
            text_div.classList.add('text-lign-through')
            // console.log('checked')

        }

        else{
            check_label.innerHTML = '';
            text_div.classList.remove('text-lign-through')
        }
        // console.log(obj.completed)
        // console.log(Task.show_project());
    });

    edit_btn.addEventListener('click', e => {
        // console.log('form activated')
        console.log(e.target,'edit clicked')
        const container = document.querySelector('#content')
        const form = renderForm(e.target,obj)
        // editForm(obj) 2 lines above go into editform function
        container.appendChild(form)
    });
    
    // use this to delte all todos currently displayed
    delete_btn.addEventListener('click', e => {
        let node = e.target
        while (!node.hasAttribute('id')){
            node = node.parentNode
        }
        // create obj each time delete clicked
        // how to access list of projects from here?
        // console.log(node.id,'id')
        // console.log('show project')
        // console.log(Task.todoItems_project)
        Task.remove_todo(node)
        node.remove()
        // how to delete in a good way?

        // console.log('show project after delte')
        // console.log(Task.todoItems_project)
        // projects.remove_todo(node)
        
    })

    // if todo is created for the first time, append new list
    if (!obj.edit){
        // console.log('u is a rookie')
        ul.appendChild(node)
    }

    // edit existing todo
    else{
        console.log('show list after editing',Task.show_project())
        let previous_node = args[1]
        while (!previous_node.hasAttribute('id')){
            previous_node = previous_node.parentNode
        }
        ul.replaceChild(node,previous_node)
    }

    

    

    // const task_div = document.createElement('li')
    
}

export default render_Todo