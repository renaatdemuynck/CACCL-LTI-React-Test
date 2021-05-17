import { useContext, useEffect } from 'react';

import { Text } from '@instructure/ui';

import AlertsContext from '../contexts/AlertsContext';
import { UserProfileConsumer } from '../contexts/UserProfileContext';


export default function Content() {
    return (
        <UserProfileConsumer renderBeforeReady={
            <Text>Loading...</Text>
        }>
            {user => (
                <Text>Hello {user.name}!</Text>
            )}
        </UserProfileConsumer>
    );
}
