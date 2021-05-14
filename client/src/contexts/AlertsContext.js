import { createContext } from 'react';

const alerts = new Map();
var alertKey = 1;

const AlertsContext = createContext({
    get alerts() {
        return alerts;
    },
    addAlert: function (content, options = {}) {
        alerts.set(alertKey++, { content, options });
    },
    closeAlert: function (key) {
        alerts.delete(key);
    }
});

export default AlertsContext;
