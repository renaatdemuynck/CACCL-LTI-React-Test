import { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { getStatus } from '../caccl';


const LtiContext = createContext();


export const LtiProvider = ({ children }) => {
    const [status, setStatus] = useState();
    const [err, setErr] = useState();
    const { t } = useTranslation();

    useEffect(() => {
        getStatus().then(status => {
            // App wasn't launched via Canvas
            if (!status.launched) {
                setErr(new Error(t('lti.error.launch_from_canvas')));
            }
            // App is not authorized
            else if (!status.authorized) {
                setErr(new Error(t('lti.error.no_canvas_access')));
            }

            setStatus(status);
        }).catch(err => { // App couldn't communicate with Canvas
            setErr(new Error(t('lti.error.server') + `: ${err.message}`));
        });
    }, [t]);

    return (
        <LtiContext.Provider value={{ status, err }}>
            {status && children}
        </LtiContext.Provider>
    );
};

export const LtiContextConsumer = LtiContext.Consumer;
export default LtiContext;
