import { createContext } from 'react';

const alerts = new Map();
var alertKey = 1;

/**
 * Adds an alert to the app
 * @param {string} content The message to show in the alert
 * @param {object} options The options to pass to the alert
 */
export function addAlert(content, options = {}) {
    alerts.set(alertKey++, { content, options });
}

/**
 * Removes the alert
 * @param {*} key
 */
export function closeAlert(key) {
    alerts.delete(key);
}

const AlertsContext = createContext({
    alerts,
    addAlert,
    closeAlert
});

export default AlertsContext;
