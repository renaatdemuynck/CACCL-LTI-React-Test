import { createContext, useState, useEffect } from 'react';

import initCACCL from 'caccl/client/cached';

const { Provider, Consumer } = createContext();
const { api } = initCACCL();


export const UserProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState();

    useEffect(() => {
        api.user.self.getProfile()
            .then(setProfile)
            .catch(err => {
                console.error(`Error while requesting user profile: ${err.message}`);
            });
    }, []);

    return (
        <Provider value={profile}>
            {children}
        </Provider>
    );
};

export const UserProfileConsumer = ({ children, renderBeforeReady }) => (
    <Consumer>
        {user => ((user || !renderBeforeReady) ? children(user) : renderBeforeReady)}
    </Consumer>
);
