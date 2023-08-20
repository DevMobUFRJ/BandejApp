export const fecharPopUp = () => {
    const blurdiv = document.getElementById('blurdiv');
    const popup = document.getElementById('popup');
    
    blurdiv?.classList.remove('popBlur');
    popup?.classList.remove('pop');
}

export const abrirPopUp = () => {
    const blurdiv = document.getElementById('blurdiv');
    const popup = document.getElementById('popup');

    blurdiv?.classList.add('popBlur');
    popup?.classList.add('pop');
}