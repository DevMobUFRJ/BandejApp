import React, { createContext, useState } from 'react';

interface INotificationContext {
    pendingNotification: boolean;
    setPendingNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NotificationContext = createContext<INotificationContext>({pendingNotification: false, setPendingNotification: () => {}});

export const NotificationProvider = ( {children} : any ) => {
    const [pendingNotification, setPendingNotification] = useState<boolean>(false);

    return (
        <NotificationContext.Provider value={{ pendingNotification, setPendingNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};