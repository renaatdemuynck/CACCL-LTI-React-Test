import { createContext, useState, useEffect } from 'react';

import initCACCL from 'caccl/client/cached';

const LtiContext = createContext();
const { getStatus } = initCACCL();


export const LtiProvider = ({ children }) => {
    const [status, setStatus] = useState();

    useEffect(() => {
        getStatus().then(status => {
            // App wasn't launched via Canvas
            if (!status.launched) {
                console.error(`Please launch this app from Canvas.`);
            }

            // App is not authorized
            if (!status.authorized) {
                console.error(`We don't have access to Canvas. Please re-launch the app.`);
            }

            setStatus(status)
        }).catch(err => {
            console.error(`Error while requesting state from server: ${err.message}`);
        });
    }, []);

    return (
        <LtiContext.Provider value={status}>
            {status?.authorized && children}
        </LtiContext.Provider>
    );
};

export const LtiContextConsumer = LtiContext.Consumer;
export default LtiContext;
