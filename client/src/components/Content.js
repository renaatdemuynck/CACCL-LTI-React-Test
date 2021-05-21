import { Trans } from 'react-i18next';
import { UserProfileConsumer } from '../contexts/UserProfileContext';

import { Text } from '@instructure/ui';


export default function Content() {
    return (
        <UserProfileConsumer renderBeforeReady={
            <Text>Loading...</Text>
        }>
            {({ name }) => (
                <Text as="p">
                    <Trans i18nKey="hello">
                        Hello {{ name }}!
                    </Trans>
                </Text>
            )}
        </UserProfileConsumer>
    );
}
