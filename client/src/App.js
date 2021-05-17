import { View } from '@instructure/ui';

import { EmotionThemeProvider } from '@instructure/emotion';

import Alerts from './components/Alerts';
import TopNav from './components/TopNav';
import Content from './components/Content'

import { theme } from '@instructure/canvas-theme';

import styles from './App.module.css';


export default function App() {
    const { err } = useContext(LtiContext);

    return (
        <EmotionThemeProvider theme={theme}>
            <View as="main" padding="small">
                <div id={styles.alerts}>
                    <Alerts />
                </div>
                {!err && // Render content if LTI launch was successful
                    <Fragment>
                <TopNav />
                <Content />
                    </Fragment>
                }
            </View>
        </EmotionThemeProvider>
    );
}
