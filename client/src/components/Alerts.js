import { Fragment, useContext } from 'react';
import { Alert } from '@instructure/ui-alerts';

import AlertsContext from '../contexts/AlertsContext';


export default function Alerts() {
    const { alerts, closeAlert } = useContext(AlertsContext);

    return (
        <Fragment>
            {Array.from(alerts).map(([key, { content, options }]) => (
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
        </Fragment>
    );
};
