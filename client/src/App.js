// Import React
import React from 'react';

// Iport Instructure UI components
import {
    Alert,
    Text,
    View
} from '@instructure/ui';

import AlertsContext, { addAlert } from './contexts/AlertsContext';

import TopNav from './components/TopNav';

// Import resources
import styles from './App.module.css';

// Signed-in user context
import { UserProfileProvider, UserProfileConsumer } from './contexts/UserProfileContext';


export default class App extends React.Component {

    /**
     * Called when the component mounted, pulls state and user profile from server
     */
    componentDidMount() {
        addAlert(`Hi! Your CACCL app is ready!`, { timeout: 3000 });
    }

    /**
     * Render the App
     */
    render() {
        // Render the component
        return (
            <UserProfileProvider>
                <View as="main" padding="small">
                    <AlertsContext.Consumer>
                        {({ alerts, closeAlert }) => (
                            <div id={styles.alerts}>
                                {Array.from(alerts.entries()).map(([key, { content, options }]) => (
                                    <Alert
                                        key={key}
                                        variant={options.variant}
                                        timeout={options.timeout}
                                        renderCloseButtonLabel="Close"
                                        onDismiss={() => closeAlert(key)}
                                        margin="small"
                                    >
                                        {content}
                                    </Alert>
                                ))}
                            </div>
                        )}
                    </AlertsContext.Consumer>
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
