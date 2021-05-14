import { createContext, useState, useEffect } from 'react';

import initCACCL from 'caccl/client/cached';

const { Provider, Consumer } = createContext();
const { api } = initCACCL();


export const UserProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState();
    const getProfile = async () => {
        try {
            const profile = await api.user.self.getProfile();

            setProfile(profile);
        } catch (err) {
            console.error(`Error while requesting user profile: ${err.message}`);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <Provider value={profile}>
            {children}
        </Provider>
    );
};

export { Consumer as UserProfileConsumer };
