import { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { LtiProvider } from './contexts/LtiContext';
import { UserProfileProvider } from './contexts/UserProfileContext';
import { AlertsProvider } from './contexts/AlertsContext';

import './i18n';

import './index.css';


ReactDOM.render(
    <Suspense fallback={
        <p>Loading...</p>
    }>

        <LtiProvider>
            <AlertsProvider>
                <UserProfileProvider>
                    <App />
                </UserProfileProvider>
            </AlertsProvider>
        </LtiProvider>
    </Suspense>,
    document.getElementById('root')
);
