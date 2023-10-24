import React, { createContext, useEffect, useState } from 'react';

interface INotificationContext {
    showInstallMessage: boolean;
    setShowInstallMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InstallMessageContext = createContext<INotificationContext>({showInstallMessage: false, setShowInstallMessage: () => {}});

export const InstallMessageProvider : React.FC<{ children: React.ReactNode }> = ( {children} ) => {
    const [showInstallMessage, setShowInstallMessage] = useState<boolean>(false);

    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test( userAgent );
      }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    useEffect(() => {
        if (isIos() && !isInStandaloneMode()) {
            setShowInstallMessage(true);
        } else{
            setShowInstallMessage(false);
        }
    }, []);

    return (
        <InstallMessageContext.Provider value={{ showInstallMessage, setShowInstallMessage }}>
            {children}
        </InstallMessageContext.Provider>
    );
};