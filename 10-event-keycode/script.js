window.addEventListener('keydown', (e) => {
    const container = document.getElementById('container');

    container.innerHTML = 
    `
    <div class="keycode-info">
        <div class="keycode-info--small">            
            <small class="keycode-info--small__text">event.key</small>
        </div>
        <p class="keycode-info--text">${e.key === ' ' ? 'Space' : e.key}</p>
    </div>

    <div class="keycode-info">
        <div class="keycode-info--small">
            <small class="keycode-info--small__text">event.code</small>
        </div>
        <p class="keycode-info--text">${e.code}</p>
    </div>
    `
})