export const abrirSideBar = () => {
    const sidebar = document.getElementById('sidebar');
    const blurdiv = document.getElementById('BlurDiv');
    
    if(sidebar && blurdiv) {
        blurdiv.addEventListener('click', fecharSideBar);

        requestAnimationFrame(() => {
            blurdiv.style.display = 'flex';
            sidebar.style.width = '72.22vw';
        });
    }
    else return;
}

export const fecharSideBar = () => {
    const sidebar = document.getElementById('sidebar');
    const blurdiv = document.getElementById('BlurDiv');
    
    if(sidebar && blurdiv) {
        blurdiv.removeEventListener('click', fecharSideBar);

        requestAnimationFrame(() => {
            blurdiv.style.display = 'none';
            sidebar.style.width = '0vw';
        });
    }
    else return;
}