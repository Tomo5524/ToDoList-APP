import Task from "./task.js"
import closeItem from "./close.js"
import render_Todo from "./renderTodo.js"

const renderForm = () => {

    const form = document.createElement('form');
    form.setAttribute('class', 'form');

    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay');
    // overlay.display = 'block'

    if (overlay.classList.contains('no-display')){
        overlay.classList.remove('no-display')
    }

    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal-box col-12 col-sm-9 col-lg-6');

    // inputs
    const title_div = document.createElement('div');
    title_div.setAttribute('class', 'title-div col-12 p-3');

    const title_box = document.createElement('input');
    title_box.setAttribute('class', 'title-box w-100 border');
    title_box.setAttribute('type', 'text');
    title_box.setAttribute('placeholder', 'Title');
    title_box.required = true

    title_div.appendChild(title_box)

    const dscr_div = document.createElement('div');
    dscr_div.setAttribute('class', 'dscr-div col-12 p-3');

    const dscr_box = document.createElement('textarea');
    dscr_box.setAttribute('class', 'dscr-box w-100 border');
    dscr_box.setAttribute('type', 'text');
    dscr_box.setAttribute('placeholder', 'Description');
    dscr_box.required = true
    
    dscr_div.appendChild(dscr_box)

    const note_div = document.createElement('div');
    note_div.setAttribute('class', 'note-div col-12 p-3');

    const note_box = document.createElement('input');
    note_box.setAttribute('class', 'note-box w-100 border');
    note_box.setAttribute('placeholder', 'Note');
    note_box.setAttribute('type', 'text');
    note_box.required = true

    note_div.appendChild(note_box)

    const date_div = document.createElement('div');
    date_div.setAttribute('class', 'date-div p-3');

    const date_text = document.createElement('p');
    date_text.setAttribute('class', 'form-text date-text');
    date_text.innerHTML = 'Date: '

    const date_box = document.createElement('input');
    date_box.setAttribute('class', 'date-box border');
    date_box.setAttribute('type', 'date');
    // date_box.required = true

    date_div.appendChild(date_text)
    date_div.appendChild(date_box)

    ////
    const start_end_prio_div = document.createElement('div');
    start_end_prio_div.setAttribute('class', 'start-end-prio_div d-flex');

    const start_div = document.createElement('div');
    start_div.setAttribute('class', 'start_div d-flex px-3');

    const start_text = document.createElement('p');
    start_text.setAttribute('class', 'form-text pr-3 start-text');
    start_text.innerHTML = 'Start: '

    const start = document.createElement('input');
    start.setAttribute('class', 'start-box border');
    start.setAttribute('type', 'number');
    start.setAttribute('min', '1');
    start.setAttribute('max', '12');

    start_div.appendChild(start_text)
    start_div.appendChild(start)

    const end_div = document.createElement('div');
    end_div.setAttribute('class', 'end_div d-flex px-3');

    const end_text = document.createElement('p');
    end_text.setAttribute('class', 'form-text pr-3 end-text');
    end_text.innerHTML = 'End: '

    const end = document.createElement('input');
    end.setAttribute('class', 'end-box border');
    end.setAttribute('type', 'number');
    end.setAttribute('min', '1');
    end.setAttribute('max', '12');

    end_div.appendChild(end_text)
    end_div.appendChild(end)

    const priority_div = document.createElement('div');
    priority_div.setAttribute('class', 'end_div d-flex px-3');

    const priority_text = document.createElement('p');
    priority_text.setAttribute('class', 'form-text pr-3 priority-text');
    priority_text.innerHTML = 'Priority: '; 

    const priority = document.createElement('select');
    priority.setAttribute('class', 'priority-box border');

    const priority_val = document.createElement('option');
    priority_val.setAttribute('value', 'high');
    priority_val.innerHTML = 'high'; 

    priority.appendChild(priority_val); 


    priority_div.appendChild(priority_text);
    priority_div.appendChild(priority); 

    start_end_prio_div.appendChild(start_div); 
    start_end_prio_div.appendChild(end_div); 
    start_end_prio_div.appendChild(priority_div); 

    ///// am and pm and priority

    const add_cancel_div = document.createElement('div');
    add_cancel_div.setAttribute('class', 'add-cancel-div d-flex p-3');

    const add_div = document.createElement('div');
    add_div.setAttribute('class', 'add-div pr-5');

    const add_btn = document.createElement('button');
    add_btn.setAttribute('class', 'add-box border');
    add_btn.innerHTML = 'Add'
    add_btn.type = 'submit'

    add_div.appendChild(add_btn)

    const cancel_div = document.createElement('div');
    cancel_div.setAttribute('class', 'cancel-div pl-5');

    const cancel_box = document.createElement('button');
    cancel_box.setAttribute('class', 'cancel-box border');
    cancel_box.innerHTML = 'Cancel'

    cancel_div.appendChild(cancel_box)

    add_cancel_div.appendChild(add_div)
    add_cancel_div.appendChild(cancel_div)

    modal.appendChild(title_div)
    modal.appendChild(dscr_div)
    modal.appendChild(note_div)
    modal.appendChild(date_div)
    modal.appendChild(start_end_prio_div)
    modal.appendChild(add_cancel_div)

    overlay.appendChild(modal)
    form.appendChild(overlay)

    // submit
    form.addEventListener('submit', e => {

        console.log('submit')
        // console.log(e.target)
        e.preventDefault()
        

        // how can i read obj in title file

        // Get the value of the input and remove whitespace
        let l = Task()
        // l.add_task(title_box.value.trim(),dscr_box.value.trim(),note_box.value.trim(),date_box.value,start.value,end.value,priority.value)
        // render_Todo(l.getObj())
        let newObj = l.getObj(title_box.value.trim(),dscr_box.value.trim(),note_box.value.trim(),date_box.value,start.value,end.value,priority.value)
        // render_Todo(title_box.value.trim(),dscr_box.value.trim(),note_box.value.trim(),date_box.value,start.value,end.value,priority.value)
        render_Todo(newObj)
        
    })

    cancel_box.addEventListener('click', e => {
        closeItem(overlay)
               
    })

    add_div.addEventListener('click', e => {
        closeItem(overlay)
               
    })

    return form

}


export default renderForm