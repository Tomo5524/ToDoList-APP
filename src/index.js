// TODO
// 1. delete todos from display @done
// 2. when there is no project, user should not be able to add Task, @ done
// 3. when new project added, remove cur_todos @ done
// 4. when current project deleted, first item in local storage becomes a new current project so display its todos @ done
// 5. do something with date. 

import todo_display from "./todoDisplay.js"
import renderForm from "./form.js"
import displayFolder from "./folders.js"
import displayNav from "./nav.js"
import setLocalStorage from "./localstorage";
import Task from "./task.js";
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
content.setAttribute('class', 'h-100 fluid-container d-blcock d-md-flex')

const nav = displayNav()

const todo = todo_display()
// console.log(title)
// console.log('sup')
content.appendChild(nav)
content.appendChild(todo)
// console.log(nav)

const folder = displayFolder()
// console.log(folder)
// console.log(e.target)
console.log('open folder')
console.log(Task.get_current_project(), 'current project after all ')
console.log(Task.show_project(), 'todolist after all ')
// console.log(JSON.parse(localStorage))
// folder.display = 'block'
nav.appendChild(folder)

// display each folder
// setLocalStorage.renderProjectfromLocalStorage()


//How to disable background when modal window pops up
// https://stackoverflow.com/questions/45607982/how-to-disable-background-when-modal-window-pops-up


// menu_btn.addEventListener('click', e => {

//     // calling displayFoloer makes it possible to close window
//     const folder = displayFolder()
                        console.log(folder)
    console.log(e.target)
//     console.log('open folder')
//     // folder.display = 'block'
//     content.appendChild(folder)
// })

// cancel_btn.addEventListener('click', e => {

//     // calling displayFoloer makes it possible to close window
//     const folder = displayFolder()
//     // console.log(folder)
//     console.log(e.target)
//     console.log('open folder')
//     // folder.display = 'block'
//     content.appendChild(folder)
// })