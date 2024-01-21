const elInsert = document.querySelector('.insert');

window.addEventListener('keydown', (e) => {
    // console.log('key:',e.key);
    // console.log('keyCode:',e.keyCode);
    // console.log('code: ',e.code);
    elInsert.innerHTML =
        `
        <div class = 'key'>
            ${e.key === ' ' ? 'Space' : e.key}
            <small>event.key<small>
        </div>
        
        <div class = 'key'>
            ${e.keyCode}
            <small>event.keyCode<small>
        </div>
        
        <div class = 'key'>
        ${e.code}
            <small>event.code<small>
        </div>
        `;
})