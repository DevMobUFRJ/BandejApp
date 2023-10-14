export const abrirPopUp = () => {
    const blurdiv = document.getElementById('BlurDiv');
    const popup = document.getElementById('popup');

    if(blurdiv && popup) {
        blurdiv.style.display = 'flex';
        
        blurdiv.addEventListener('click', () => fecharPopUp);

        requestAnimationFrame (() => {
            popup.style.transform = 'scale(1, 1)';
        });
    }
}

export const fecharPopUp = (setState: Function) => {
    const blurdiv = document.getElementById('BlurDiv');
    const popup = document.getElementById('popup');
    
    if(blurdiv && popup) {
        blurdiv.removeEventListener('click', () => fecharPopUp);

        requestAnimationFrame (() => {
            popup.style.transform = 'scale(0.01, 0.01)';
        });
        
        setTimeout(() => {
            blurdiv.style.display = 'none';
            setState(false);
        }, 300);
    }
}