import { useContext, useState } from 'react';
import {
    AppNav,
    Avatar,
    IconAnalyticsLine,
    IconHamburgerLine
} from '@instructure/ui';

import UserProfileContext from '../contexts/UserProfileContext';


export default function TopNav() {
    const [visibleItemsCount, setVisibleItemsCount] = useState(2);

    const profile = useContext(UserProfileContext);
    const avatarUrl = profile?.avatar_url;
    const name = profile?.name || '';

    return (
        <AppNav
            screenReaderLabel="App navigation"
            visibleItemsCount={visibleItemsCount}
            onUpdate={({ visibleItemsCount }) => {
                setVisibleItemsCount(visibleItemsCount)
            }}
            renderBeforeItems={
                <IconAnalyticsLine size="small" color="primary" />
            }
            renderAfterItems={
                <Avatar name={name} src={avatarUrl} size="small" />
            }
            renderTruncateLabel={
                <IconHamburgerLine size="small" />
            }
        >
            <AppNav.Item
                renderLabel="Canvas"
                href="https://arteveldehogeschool.instructure.com/"
            />
            <AppNav.Item
                isSelected
                renderLabel="Home"
                href="/"
            />
        </AppNav >
    );
}
