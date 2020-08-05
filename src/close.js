
const closeItem = (item) =>{

    item.addEventListener('click', e => {
        item.classList.add('no-display')
    })

}

export default closeItem