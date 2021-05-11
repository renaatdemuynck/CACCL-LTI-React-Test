// Import caccl
import initCACCL from 'caccl/client/cached';

// Import React
import React from 'react';

// Iport Instructure UI components
import {
    Alert,
    Text,
    View
} from '@instructure/ui';

import AlertsContext, { addAlert } from './contexts/AlertsContext';

// Import resources
import styles from './App.module.css';

// Signed-in user context
const UserProfileContext = React.createContext();

// Initialize caccl
const { api, getStatus } = initCACCL();


export default class App extends React.Component {

    /**
     * Initialize App component
     */
    constructor(props) {
        super(props);

        // Set up state
        this.state = {
            isAppReady: false
        };
    }

    /**
     * Called when the component mounted, pulls state and user profile from server
     */
    async componentDidMount() {
        // Load status
        try {
            // Get status from server
            const status = await getStatus();

            // > App wasn't launched via Canvas
            if (!status.launched) {
                addAlert(`Please launch this app from Canvas.`, { variant: 'error' });

                return;
            }

            // > App is not authorized
            if (!status.authorized) {
                addAlert(`We don't have access to Canvas. Please re-launch the app.`, { variant: 'error' });

                return;
            }
        } catch (err) {
            addAlert(`Error while requesting state from server: ${err.message}`, { variant: 'error' });

            return;
        }

        // Load profile information
        try {
            // Get profile from Canvas via api
            const profile = await api.user.self.getProfile();

            addAlert(`Hi ${profile.name}! Your CACCL app is ready!`, { timeout: 3000 });

            // Update state
            this.setState({
                isAppReady: true,
                profile
            });

            return;
        } catch (err) {
            addAlert(`Error while requesting user profile: ${err.message}`, { variant: 'error' });

            return;
        }
    }

    /**
     * Render the App
     */
    render() {
        // Deconstruct the state
        const { isAppReady, profile } = this.state;

        // Render the component
        return (
            <UserProfileContext.Provider value={profile}>
                <View>
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
                    {isAppReady &&
                        <UserProfileContext.Consumer>
                            {user => (
                                <Text>
                                    Hello {user.name}. Your CACCL app is ready!
                                </Text>
                            )}
                        </UserProfileContext.Consumer>
                    }
                </View>
            </UserProfileContext.Provider>
        );
    }
}
