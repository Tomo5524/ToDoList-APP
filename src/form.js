import Task from "./task.js"
import closeItem from "./close.js"
import render_Todo from "./renderTodo.js"
import setLocalStorage from "./localstorage";

// ele determines if current element is a new todo or edit
// ele is passed in as Rest Parameter so it can handle edit that will have 2 elements (class-attribute and object)
const renderForm = (...ele) => {

    // const form = document.createElement('form');
    // form.setAttribute('class', 'form');
    // console.log(ele[0], 'ele')
    // console.log(ele.classList, 'ele.classList')

    // handle both situations  when buton and i are clicked 
    let cur_ele = ((ele[0].classList.contains('fa-edit')) || (ele[0].classList.contains('edit-btn'))) ? 'edit' : 'add-btn'
    // console.log(cur_ele,'cur_ele')

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
    // dscr_box.required = true
    
    dscr_div.appendChild(dscr_box)

    // const note_div = document.createElement('div');
    // note_div.setAttribute('class', 'note-div col-12 p-3');

    // const note_box = document.createElement('input');
    // note_box.setAttribute('class', 'note-box w-100 border');
    // note_box.setAttribute('placeholder', 'Note');
    // note_box.setAttribute('type', 'text');
    // // note_box.required = true

    // note_div.appendChild(note_box)

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
    start_end_prio_div.setAttribute('class', 'start-end-prio_div d-flex flex-wrap');

    const start_div = document.createElement('div');
    start_div.setAttribute('class', 'start_div d-flex px-3 col-sm-6 col-md-4');

    const start_text = document.createElement('p');
    start_text.setAttribute('class', 'form-text pr-3 start-text');
    start_text.innerHTML = 'Start: '

    const start = document.createElement('input');
    start.setAttribute('class', 'start-box border');
    start.setAttribute('type', 'time');
    // start.setAttribute('min', '1');
    // start.setAttribute('max', '12');

    // const start_time_div = document.createElement('div');
    // start_time_div.setAttribute('class', 'd-flex align-items-center pl-3');

    // const start_AM = document.createElement('input');
    // start_AM.setAttribute('type', 'radio');
    // start_AM.setAttribute('id', 'start-AM');
    // start_AM.setAttribute('name', 'start');
    // start_AM.setAttribute('value', 'start-AM');
    // start_AM.checked = true;

    // const start_AM_Label = document.createElement('label');
    // start_AM_Label.setAttribute('for', 'start');
    // start_AM_Label.innerHTML = "AM"

    // const start_PM = document.createElement('input');
    // start_PM.setAttribute('type', 'radio');
    // start_PM.setAttribute('class', 'ml-2');
    // start_PM.setAttribute('id', 'start-PM');
    // start_PM.setAttribute('name', 'start');
    // start_PM .setAttribute('value', 'start-PM');

    // const start_PM_Label = document.createElement('label');
    // start_PM_Label.setAttribute('for', 'start');
    // start_PM_Label.innerHTML = "PM";

    // start_time_div.appendChild(start_AM)
    // start_time_div.appendChild(start_AM_Label)
    // start_time_div.appendChild(start_PM)
    // start_time_div.appendChild(start_PM_Label)

    start_div.appendChild(start_text)
    start_div.appendChild(start)
    // start_div.appendChild(start_time_div)

    const end_div = document.createElement('div');
    end_div.setAttribute('class', 'end_div d-flex px-3 col-sm-6 col-md-4');

    const end_text = document.createElement('p');
    end_text.setAttribute('class', 'form-text pr-3 end-text');
    end_text.innerHTML = 'End: '

    const end = document.createElement('input');
    end.setAttribute('class', 'end-box border');
    end.setAttribute('type', 'time');
    // end.setAttribute('min', '1');
    // end.setAttribute('max', '12');

    // const end_time_div = document.createElement('div');
    // end_time_div.setAttribute('class', 'd-flex align-items-center pl-3');

    // const end_AM = document.createElement('input');
    // end_AM.setAttribute('type', 'radio');
    // end_AM.setAttribute('id', 'end-AM');
    // end_AM.setAttribute('name', 'end');
    // end_AM.setAttribute('value', 'end-AM');
    // end_AM.checked = true;

    // const end_AM_Label = document.createElement('label');
    // end_AM_Label.setAttribute('for', 'end');
    // end_AM_Label.innerHTML = "AM"

    // const end_PM = document.createElement('input');
    // end_PM.setAttribute('type', 'radio');
    // end_PM.setAttribute('class', 'ml-2');
    // end_PM.setAttribute('id', 'end-PM');
    // end_PM.setAttribute('name', 'end');
    // end_PM .setAttribute('value', 'end');

    // const end_PM_Label = document.createElement('label');
    // end_PM_Label.setAttribute('for', 'end');
    // end_PM_Label.innerHTML = "PM";

    // end_time_div.appendChild(end_AM)
    // end_time_div.appendChild(end_AM_Label)
    // end_time_div.appendChild(end_PM)
    // end_time_div.appendChild(end_PM_Label)
    
    end_div.appendChild(end_text)
    end_div.appendChild(end)
    // end_div.appendChild(end_time_div)

    const priority_div = document.createElement('div');
    priority_div.setAttribute('class', 'priority-div d-flex px-3 col-sm-12 col-md-4');

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
    add_div.setAttribute('class', 'add-div mr-5');

    const add_btn = document.createElement('button');
    add_btn.setAttribute('class', 'add-box border');
    add_btn.innerHTML = 'Add'
    // add_btn.type = 'submit'

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
    // modal.appendChild(note_div)
    modal.appendChild(date_div)
    modal.appendChild(start_end_prio_div)
    modal.appendChild(add_cancel_div)

    overlay.appendChild(modal)
    // form.appendChild(overlay)

    // create different that renders form?
    // const form_handler = () => {
    //     // by creating this, edit has acess to form and can just edit
    //     const ad_btn = document.querySelector('.add-box')

    // }

    // let l = Task()
    // submit
    // form.addEventListener('submit', e
    // submit and click are pretty much same

    if (cur_ele == 'edit') {
        // console.log('edit')
        // when editing, obj already exists so we have acess to obj
        let obj = ele[1]
        console.log(obj)
        // let previous_id = obj.id

        // render values
        title_box.value = obj.title
        dscr_box.value = obj.desc
        start.value = obj.start
        end.value = obj.end
        add_btn.addEventListener('click', e => {

            // console.log('submit')
            // console.log(e)   
            e.preventDefault();
            const edit_task = Task.edit_todo(title_box.value.trim(),dscr_box.value.trim(),date_box.value,start.value,end.value,priority.value,obj.completed,obj.id)

            // ele[0] denotes soon-to-be-replaced element and edit_task is a new object after edited
            render_Todo(edit_task,ele[0])

            setLocalStorage.editTodoLocalStorage(edit_task)
            // render_Todo(edit_task)
            closeItem(overlay)
            // Task.edit_todo()
            // console.log(ele[1])

        })
    }

    else {
        add_btn.addEventListener('click', e => {

            // console.log('submit')
            // console.log(e)   
            e.preventDefault();
    
            // how can i read obj in title file
            // self-excution of task
    
            // Get the value of the input and remove whitespace
            // l.add_task(title_box.value.trim(),dscr_box.value.trim(),note_box.value.trim(),date_box.value,start.value,end.value,priority.value)
            // render_Todo(l.getObj())
    
            // make sure user inputs todo's title
            if (title_box.value.trim()){
                console.log(Task.get_current_project(),'before added new task, check current project, form.js')
                const newObj = Task.add_task(title_box.value.trim(),dscr_box.value.trim(),date_box.value,start.value,end.value,priority.value)
                // console.log(Task.show_project(),'after add in form clicked')
                // let newObj = Task.getObj(title_box.value.trim(),dscr_box.value.trim(),date_box.value,start.value,end.value,priority.value)
                // render_Todo(title_box.value.trim(),dscr_box.value.trim(),note_box.value.trim(),date_box.value,start.value,end.value,priority.value)
                setLocalStorage.addNewTodoToLocalStorage(newObj)
                render_Todo(newObj)
                closeItem(overlay) 
                console.log(localStorage, 'localStorage after todo added')
            }
    
            else{
                // warning box
                // console.log('where warning at')
                const warning_modal = document.createElement('div')
                warning_modal.setAttribute('class','warning-modal bg-light border text-center no-display p-2')

                const warning_text = document.createElement('p')
                warning_text.setAttribute('class','warning-text')
                warning_text.innerHTML = "You need to add a todo's title before adding a todo"
                const ok_btn = document.createElement('button');
                ok_btn.innerHTML = 'OK'
                ok_btn.setAttribute('class','ok_btn')

                warning_modal.appendChild(warning_text)
                warning_modal.appendChild(ok_btn)
                
                modal.appendChild(warning_modal)
                // warning_box.appendChild(ok_btn)

                if (warning_modal.classList.contains('no-display')){
                    warning_modal.classList.remove('no-display')
                }

                ok_btn.addEventListener('click', e => {
    
                    closeItem(warning_modal)
            
                });
                    
                }
        })
        
    }

    

    cancel_box.addEventListener('click', e => {
        closeItem(overlay)
               
    })

    return overlay

}


export default renderForm