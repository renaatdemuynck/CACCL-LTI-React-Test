// Import React
import React from 'react';

// Iport Instructure UI components
import {
    Text,
    View
} from '@instructure/ui';

import TopNav from './components/TopNav';
import Alerts from './components/Alerts';

// Signed-in user context
import { UserProfileProvider, UserProfileConsumer } from './contexts/UserProfileContext';

import styles from './App.module.css';


export default class App extends React.Component {

    /**
     * Render the App
     */
    render() {
        // Render the component
        return (
            <UserProfileProvider>
                <View as="main" padding="small">
                    <div id={styles.alerts}>
                        <Alerts />
                    </div>
                    <TopNav />
                    <UserProfileConsumer renderBeforeReady={
                        <Text>Loading...</Text>
                    }>
                        {user => (
                            <Text>Hello {user.name}!</Text>
                        )}
                    </UserProfileConsumer>
                </View>
            </UserProfileProvider>
        );
    }

}
