const buttons = document.querySelectorAll('.question--btn')

buttons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        buttons.parentNode.parentElement.classList.toggle('clicked')
    })
})