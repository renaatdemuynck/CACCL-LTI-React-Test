import React from 'react';
import {
    AppNav,
    IconAnalyticsLine,
    IconHamburgerLine
} from '@instructure/ui';


export default class TopNav extends React.Component {

    state = {
        visibleItemsCount: 2
    };

    handleUpdate = ({ visibleItemsCount }) => {
        this.setState({ visibleItemsCount })
    };

    render() {
        const visibleItemsCount = this.state.visibleItemsCount

        return (
            <AppNav
                screenReaderLabel="App navigation"
                visibleItemsCount={visibleItemsCount}
                onUpdate={this.handleUpdate}
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

}
