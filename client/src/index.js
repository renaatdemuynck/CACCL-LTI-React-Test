import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { canvas } from '@instructure/ui-themes'
import { EmotionThemeProvider } from '@instructure/emotion'

import initCACCL from 'caccl/client/cached';

// Initialize caccl
const { getStatus } = initCACCL();

// Get status from server
getStatus().then(status => {
    // App wasn't launched via Canvas
    if (!status.launched) {
        console.error(`Please launch this app from Canvas.`);

        return;
    }

    // App is not authorized
    if (!status.authorized) {
        console.error(`We don't have access to Canvas. Please re-launch the app.`);

        return;
    }

    ReactDOM.render(
        <EmotionThemeProvider theme={canvas}>
            <App />
        </EmotionThemeProvider>,
        document.getElementById('root')
    );
}).catch(err => {
    console.error(`Error while requesting state from server: ${err.message}`);

    return;
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
