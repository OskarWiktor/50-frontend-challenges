const photoPanel = document.querySelectorAll('.photo-panel');
const active = document.querySelector('.active');

photoPanel.forEach((photoPanel) => {
    photoPanel.addEventListener('click', () => { 
        removeAciveClass()
        photoPanel.classList.add('active')
    })
});

function removeAciveClass() {
    photoPanel.forEach(photoPanel => {
            photoPanel.classList.remove('active')
    })
};