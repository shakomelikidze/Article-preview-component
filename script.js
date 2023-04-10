const shareButton = document.querySelector('.share-button')
const removeDisplayNone = document.querySelector('.share-box')

function appearShareBox() {
    removeDisplayNone.classList.toggle('display-none')
    removeDisplayNone.classList.toggle('position-relative')
}


shareButton.addEventListener('click', appearShareBox)