import renderTitle from "./title.js"
import renderForm from "./form.js"
// import renderdueDate from "./dueDate.js"
// import renderPriority from "./priority.js" 
// // import renderNotes from "./notes.js" //change bg
// import renderChecklist from "./checklist.js" 

//title, description, dueDate and priority. You might also want to include notes or even a checklist.


const content = document.querySelector('#content');

const title = renderTitle()
// console.log(title)

content.appendChild(title)


const add_btn = document.querySelector('.add-btn');

//How to disable background when modal window pops up
// https://stackoverflow.com/questions/45607982/how-to-disable-background-when-modal-window-pops-up
add_btn.addEventListener('click', e => {
    console.log(e)
})