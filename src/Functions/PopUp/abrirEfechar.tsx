export const togglePopUp = (abrindo: boolean) => {
    const sombra = document.getElementById('sombra');
    const popup = document.getElementById('popup');
    if (!sombra || !popup) {
        return;
    }
    
    if (abrindo) {
        sombra.style.display = 'block';
        popup.style.display = 'flex';
        requestAnimationFrame (() => {
            popup.style.transform = 'scale(1, 1)';
        });
    }
    else {
        sombra.style.display = 'none';
        popup.style.display = 'none';
        requestAnimationFrame (() => {
            popup.style.transform = 'scale(0, 0)';
        });
    }
}