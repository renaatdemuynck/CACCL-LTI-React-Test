import { Avatar } from '@instructure/ui';
import { useContext } from 'react';
import UserProfileContext from '../contexts/UserProfileContext';


export default function UserAvatar({ size }) {
    const profile = useContext(UserProfileContext);
    const name = profile?.name || 'Guest';
    const avatarUrl = profile?.avatar_url;

    return (
        <Avatar name={name} src={avatarUrl} size={size} />
    );
}
