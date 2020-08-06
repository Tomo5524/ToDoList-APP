import renderTitle from "./title.js"
import renderForm from "./form.js"
import displayFolder from "./folders.js"
import displayNav from "./nav.js"
// import renderdueDate from "./dueDate.js"
// import renderPriority from "./priority.js" 
// // import renderNotes from "./notes.js" //change bg
// import renderChecklist from "./checklist.js" 

//title, description, dueDate and priority. You might also want to include notes or even a checklist.

// features
// always can seen all the tasks you have done
// folder denotes date
// add logo lets user add task to existing foloer (most likely today)
// menu icon lets user see existing files and creates a new one

const content = document.querySelector('#content');
content.setAttribute('class', 'h-100 fluid-container d-flex')

const nav = displayNav()

const title = renderTitle()
// console.log(title)

content.appendChild(nav)
content.appendChild(title)
console.log(nav)


const add_btn = document.querySelector('.add-btn');
const menu_btn = document.querySelector('.menu-btn');

const form = renderForm()
console.log(form)



//How to disable background when modal window pops up
// https://stackoverflow.com/questions/45607982/how-to-disable-background-when-modal-window-pops-up
add_btn.addEventListener('click', e => {
    console.log(e.target)
    content.appendChild(form)

    // totally works
    // const div = document.createElement('div')
    // div.setAttribute('class', 'border');
    // div.innerHTML = 'Meow'
    // nav.appendChild(div)
})

menu_btn.addEventListener('click', e => {
    const folder = displayFolder()
    // console.log(folder)
    console.log(e.target)
    console.log('open folder')
    // folder.display = 'block'
    content.appendChild(folder)
})