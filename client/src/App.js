import { View } from '@instructure/ui';

import { LtiProvider } from './contexts/LtiContext';
import { UserProfileProvider } from './contexts/UserProfileContext';

import Alerts from './components/Alerts';
import TopNav from './components/TopNav';
import Content from './components/Content'

import styles from './App.module.css';


export default function App() {
    return (
        <LtiProvider>
            <UserProfileProvider>
                <View as="main" padding="small">
                    <div id={styles.alerts}>
                        <Alerts />
                    </div>
                    <TopNav />
                    <Content />
                </View>
            </UserProfileProvider>
        </LtiProvider>
    );
}
