import { Avatar } from '@instructure/ui';
import { useContext } from 'react';
import UserProfileContext from '../contexts/UserProfileContext';


export default function UserAvatar({ size }) {
    const profile = useContext(UserProfileContext);
    const name = profile?.name || 'Guest';

    return (
        <Avatar name={name} size={size} />
    );
}
