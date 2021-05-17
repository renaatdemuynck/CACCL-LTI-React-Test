import { useContext } from 'react';
import { Avatar } from '@instructure/ui';

import UserProfileContext from '../contexts/UserProfileContext';


export default function UserAvatar({ size }) {
    const profile = useContext(UserProfileContext);
    const avatarUrl = profile?.avatar_url;
    const name = profile?.name || '';

    return (
        <Avatar name={name} src={avatarUrl} size={size} />
    );
}
