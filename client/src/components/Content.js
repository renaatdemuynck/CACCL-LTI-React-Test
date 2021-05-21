import { UserProfileConsumer } from '../contexts/UserProfileContext';

import { Text } from '@instructure/ui';


export default function Content() {
    return (
        <UserProfileConsumer renderBeforeReady={
            <Text>Loading...</Text>
        }>
            {user => (
                <Text as="p">Hello {user.name}!</Text>
            )}
        </UserProfileConsumer>
    );
}
