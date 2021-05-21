import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { View } from '@instructure/ui';

import LtiContext from './contexts/LtiContext';
import AlertsContext from './contexts/AlertsContext';
import { EmotionThemeProvider } from '@instructure/emotion';

import Alerts from './components/Alerts';
import TopNav from './components/TopNav';
import Content from './components/Content';

import { theme } from '@instructure/canvas-theme';

import styles from './App.module.css';


export default function App() {
    const { err } = useContext(LtiContext);
    const { addAlert } = useContext(AlertsContext);
    const { t } = useTranslation();

    useEffect(() => {
        if (err) {
            addAlert(err.message, { variant: 'error' });
        } else {
            addAlert(t('app_ready'), { timeout: 3000 });
        }
    }, [err, addAlert, t]);

    return (
        <EmotionThemeProvider theme={theme}>
                <div id={styles.alerts}>
                    <Alerts />
                </div>
                {!err && // Render content if LTI launch was successful
                <View as="main" padding="0 small">
                        <TopNav />
                        <Content />
            </View>
            }
        </EmotionThemeProvider>
    );
}
