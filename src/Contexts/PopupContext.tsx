import React, { createContext, useState } from 'react';

type popAtual = {
    popupAtual: string;
    mostrarPopup: Function;
}

export const PopupContext = createContext<popAtual>({popupAtual: '', mostrarPopup: () => {}});

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [popupAtual, setPopup] = useState('');

    function mostrarPopup(popID?: string) {
        if(popID) setPopup(popID);
        else {
            const popOuter = document.getElementById('popOuter');
            const popup = document.getElementById('popup');
            
            if(popOuter && popup) {
                requestAnimationFrame (() => {
                    popup.style.transform = 'scale(0, 0)';
                });
                
                setTimeout(() => {
                    popOuter.style.display = 'none';
                    setPopup('')
                }, 300);
            }
        }
        
    }

    return (
        <PopupContext.Provider value={{popupAtual, mostrarPopup}}>
            {children}
        </PopupContext.Provider>
    );
};