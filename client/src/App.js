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

// Import resources
import styles from './App.module.css';

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
            alerts: new Map(),
            isAppReady: false
        };

        this.alertKey = 0;
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
                this.addAlert(`Please launch this app from Canvas.`, { variant: 'error' });

                return;
            }

            // > App is not authorized
            if (!status.authorized) {
                this.addAlert(`We don't have access to Canvas. Please re-launch the app.`, { variant: 'error' });

                return;
            }
        } catch (err) {
            this.addAlert(`Error while requesting state from server: ${err.message}`, { variant: 'error' });

            return;
        }

        // Load profile information
        try {
            // Get profile from Canvas via api
            const profile = await api.user.self.getProfile();

            this.addAlert(`Hi ${profile.name}! Your CACCL app is ready!`, { timeout: 3000 });

            // Update state
            this.setState({
                isAppReady: true
            });

            return;
        } catch (err) {
            this.addAlert(`Error while requesting user profile: ${err.message}`, { variant: 'error' });

            return;
        }
    }

    addAlert(content, options = {}) {
        const alerts = this.state.alerts;
        const key = this.alertKey++;

        alerts.set(key, { content, options });
        this.setState({ alerts });
    }

    closeAlert(key) {
        const alerts = this.state.alerts;

        alerts.delete(key);
        this.setState({ alerts });
    }

    /**
     * Render the App
     */
    render() {
        // Deconstruct the state
        const { alerts, isAppReady } = this.state;

        // Render the component
        return (
            <View>
                <div id={styles.alerts}>
                    {Array.from(alerts.entries()).map(([key, { content, options }]) => (
                        <Alert
                            key={key}
                            variant={options.variant}
                            timeout={options.timeout}
                            renderCloseButtonLabel="Close"
                            onDismiss={() => this.closeAlert(key)}
                            margin="small"
                        >
                            {content}
                        </Alert>
                    ))}
                </div>
                {isAppReady &&
                    <Text>
                        Your CACCL app is ready!
                    </Text>
                }
            </View>
        );
    }
}
