import { createContext, useState } from 'react';


const AlertsContext = createContext({
    alerts: new Map(),
    addAlert: () => { },
    closeAlert: () => { }
});

var alertKey = 1;


export const AlertsProvider = ({ children }) => {
    const [alerts, setAlerts] = useState(new Map());
    const [addAlert] = useState(() => (content, options = {}) => {
        alerts.set(alertKey++, { content, options });
        setAlerts(new Map(alerts));
    });
    const [closeAlert] = useState(() => (key) => {
        alerts.delete(key);
    });

    return (
        <AlertsContext.Provider value={{ alerts, addAlert, closeAlert }}>
            {children}
        </AlertsContext.Provider>
    );
};

export const AlertsConsumer = AlertsContext.Consumer;
export default AlertsContext;
