import { useState } from 'react';
import {
    AppNav,
    IconAnalyticsLine,
    IconHamburgerLine
} from '@instructure/ui';


export default function TopNav() {
    const [visibleItemsCount, setVisibleItemsCount] = useState(2);

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
