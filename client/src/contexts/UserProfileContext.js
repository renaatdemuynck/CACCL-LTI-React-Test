import { createContext, useState, useEffect } from 'react';

import { api } from '../caccl';


const UserProfileContext = createContext();


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
        <UserProfileContext.Provider value={profile}>
            {children}
        </UserProfileContext.Provider>
    );
};

export const UserProfileConsumer = ({ children, renderBeforeReady }) => (
    <UserProfileContext.Consumer>
        {user => ((user || !renderBeforeReady) ? children(user) : renderBeforeReady)}
    </UserProfileContext.Consumer>
);

export default UserProfileContext;
