import { Text } from '@instructure/ui';
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
