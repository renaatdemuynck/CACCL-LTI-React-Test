import ReactDOM from 'react-dom';
import App from './App';

import { LtiProvider } from './contexts/LtiContext';
import { UserProfileProvider } from './contexts/UserProfileContext';
import { AlertsProvider } from './contexts/AlertsContext';

import './index.css';


ReactDOM.render(
    <LtiProvider>
        <AlertsProvider>
            <UserProfileProvider>
                <App />
            </UserProfileProvider>
        </AlertsProvider>
    </LtiProvider>,
    document.getElementById('root')
);
