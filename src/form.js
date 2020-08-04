
const renderForm = () => {
    const overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlay');

    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');

    // inputs
    const title_div = document.createElement('div');
    title_div.setAttribute('class', 'title-div col-sm-12 col-md-8');

    const title_box = document.createElement('input');
    title_box.setAttribute('class', 'title-box');
    title_box.setAttribute('type', 'text');
    title_box.setAttribute('placeholder', 'Title');
    title_box.required = true


    const dscr_div = document.createElement('div');
    dscr_div.setAttribute('class', 'dscr-div col-sm-12 col-md-8');

    const dscr_box = document.createElement('input');
    dscr_box.setAttribute('class', 'dscr-box');
    dscr_box.setAttribute('type', 'text');
    dscr_box.setAttribute('placeholder', 'Description');
    dscr_box.required = true
    
    const note_div = document.createElement('div');
    note_div.setAttribute('class', 'note-div col-sm-12 col-md-8');

    const note_box = document.createElement('input');
    note_box.setAttribute('class', 'note-box');
    note_box.setAttribute('placeholder', 'Note');
    note_box.setAttribute('type', 'text');
    note_box.required = true

    const date_div = document.createElement('div');
    date_div.setAttribute('class', 'date-div col-sm-12 col-md-8');

    const date_box = document.createElement('input');
    date_box.setAttribute('class', 'date-box');
    note_box.setAttribute('type', 'date');
    note_box.required = true

    const add_cancel_div = document.createElement('div');
    add_cancel_div.setAttribute('class', 'add-cancel-div d-flex col-sm-12 col-md-8');

    const add_div = document.createElement('div');
    add_div.setAttribute('class', 'add-div col-sm-12 col-md-4');

    const add_box = document.createElement('button');
    add_box.setAttribute('class', 'add-box');

    const cancel_div = document.createElement('div');
    cancel_div.setAttribute('class', 'cancel-div col-sm-12 col-md-4');

    const cancel_box = document.createElement('button');
    cancel_box.setAttribute('class', 'cancel-box');

    add_cancel_div.appendChild(add_div)
    add_cancel_div.appendChild(cancel_div)

    


    return overlay

}


export default renderForm