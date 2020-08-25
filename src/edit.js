
const render_edit_todo = (obj) => {

    edit_text = document.querySelector('.text-title')
    // console.log(edit_text)
    edit_text.innerHTML = obj.title

    edit_dscr = document.querySelector('.todo-description')
    edit_dscr.innerHTML = obj.desc

    start_time = document.querySelector('.todo-start-time')
    start_text.innerHTML = obj.start

    start_time = document.querySelector('.todo-end-time')
    end_text.innerHTML = obj.end
}

export default render_edit_todo