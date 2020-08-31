
function remove_cur_todos(previous_project){
    const ul = document.querySelector('.todo-list');
    // console.log(ul,'ul')
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
        
}

export default remove_cur_todos