import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { canvas } from '@instructure/ui-themes'
import { EmotionThemeProvider } from '@instructure/emotion'


ReactDOM.render(
    <EmotionThemeProvider theme={canvas}>
        <App />
    </EmotionThemeProvider>,
    document.getElementById('root')
);
