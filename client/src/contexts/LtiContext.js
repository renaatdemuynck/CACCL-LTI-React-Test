import { createContext, useState, useEffect } from 'react';

import { getStatus } from '../caccl';


const LtiContext = createContext();


export const LtiProvider = ({ children }) => {
    const [status, setStatus] = useState();
    const [err, setErr] = useState();

    useEffect(() => {
        getStatus().then(status => {
            // App wasn't launched via Canvas
            if (!status.launched) {
                setErr(new Error(`Please launch this app from Canvas.`));
            }
            // App is not authorized
            else if (!status.authorized) {
                setErr(new Error(`We don't have access to Canvas. Please re-launch the app.`));
            }

            setStatus(status)
        }).catch(err => { // App couldn't communicate with Canvas
            setErr(new Error(`Error while requesting state from server: ${err.message}`));
        });
    }, []);

    return (
        <LtiContext.Provider value={{ status, err }}>
            {status && children}
        </LtiContext.Provider>
    );
};

export const LtiContextConsumer = LtiContext.Consumer;
export default LtiContext;
