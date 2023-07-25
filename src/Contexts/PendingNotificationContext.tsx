import React, { createContext, useEffect, useState } from 'react';

interface INotificationContext {
    pendingNotification: boolean;
    setPendingNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NotificationContext = createContext<INotificationContext>({pendingNotification: false, setPendingNotification: () => {}});

export const NotificationProvider = ( {children} : any ) => {
    const [pendingNotification, setPendingNotification] = useState<boolean>(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_ULTIMO_COMUNICADO_API_URL}`)
        .then((data) => data.json())
        .then((post) => {
            let dataUltimoAvisoFormatada = post?.substring(0, 10);
            dataUltimoAvisoFormatada = dataUltimoAvisoFormatada?.split('-').reverse().join('/');
            if(JSON.stringify(dataUltimoAvisoFormatada) !== localStorage.getItem("bandejapp:ultimoAviso")){
                setPendingNotification(true)
            }
        })
        .catch(() => {
            setPendingNotification(false)
        });
    }, []);

    return (
        <NotificationContext.Provider value={{ pendingNotification, setPendingNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};