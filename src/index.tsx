import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Router from './Routes/Router';
import { NotificationProvider } from './Contexts/PendingNotificationContext';
import { InstallMessageProvider } from './Contexts/ShowInstallMessageContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <React.StrictMode>
      <InstallMessageProvider>
        <NotificationProvider>
          <Router />
        </NotificationProvider>
      </InstallMessageProvider>
    </React.StrictMode>
  );
};

root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();