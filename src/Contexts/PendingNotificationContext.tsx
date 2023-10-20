import React, { createContext, useEffect, useState } from 'react';

interface INotificationContext {
    pendingNotification: boolean;
    setPendingNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NotificationContext = createContext<INotificationContext>({pendingNotification: false, setPendingNotification: () => {}});

export const NotificationProvider : React.FC<{ children: React.ReactNode }> = ( {children} ) => {
    const [pendingNotification, setPendingNotification] = useState<boolean>(false);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_ULTIMO_COMUNICADO_API_URL}`)
        .then((data) => data.json())
        .then((post) => {
            if(JSON.stringify(post) !== localStorage.getItem("bandejapp:ultimoAviso") && post !== null){
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