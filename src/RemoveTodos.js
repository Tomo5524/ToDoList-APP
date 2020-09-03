
function remove_cur_todos(){

    console.log('remove_cur_todos executed ///////////  ')
    // make todos disappear from display

    const ul = document.querySelector('.todo-list');
    // console.log(ul,'ul')
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
        
}

export default remove_cur_todos