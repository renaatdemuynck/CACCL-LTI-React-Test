import { View } from '@instructure/ui';

import Alerts from './components/Alerts';
import TopNav from './components/TopNav';
import Content from './components/Content'

import { UserProfileProvider } from './contexts/UserProfileContext';

import styles from './App.module.css';


export default function App() {
    return (
        <UserProfileProvider>
            <View as="main" padding="small">
                <div id={styles.alerts}>
                    <Alerts />
                </div>
                <TopNav />
                <Content />
            </View>
        </UserProfileProvider>
    );
}
