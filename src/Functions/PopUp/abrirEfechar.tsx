export const togglePopUp = (abrindo: boolean) => {
    const sombra = document.getElementById('sombra');
    const popup = document.getElementById('popup');
    if (!sombra || !popup) {
        console.log('aa')
        return;
    }
    
    if (abrindo) {
        requestAnimationFrame (() => {
            sombra.style.display = 'block';
            popup.style.display = 'flex';
            popup.style.transform = 'scale(1, 1)';
        });
    }
    else {
        requestAnimationFrame (() => {
            sombra.style.display = 'none';
            popup.style.display = 'none';
            popup.style.transform = 'scale(0, 0)';
        });
    }
}