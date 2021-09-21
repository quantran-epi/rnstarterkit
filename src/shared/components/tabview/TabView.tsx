import { Box } from '@components/box'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { ITabViewProps, ITabPageProps, ITabViewContext } from './ITabView'
import { TabPageCollection } from './TabPageCollection'
import { TabPage } from './TabPage'
import { TabBar } from './TabBar'
import { LayoutChangeEvent, ViewStyle } from 'react-native'

const TabViewContext = React.createContext<ITabViewContext>({
    tabBarItemStyles: {}
});

type TabViewCompoundComponent = FunctionComponent<ITabViewProps> & {
    Page: FunctionComponent<ITabPageProps>
}

const TabView: TabViewCompoundComponent = ({
    activeIndex,
    tabBarItems,
    tabPages,
    renderTabBarItem,
    onTabIndexChanged,
    styles,
    tabBarItemStyles,
    maxItemsPerScreen = 4
}) => {
    const [tabViewContextData] = useState<ITabViewContext>({
        tabBarItemStyles
    })
    const containerHeight = useRef<number>(0);
    const tabBarHeight = useRef<number>(0);
    const [pagesCollectionHeight, setPagesCollectionHeight] = useState<number>(0);

    const getPages = (): React.ReactElement[] => {
        return tabPages.map((page, pageIndex) => page(tabBarItems[pageIndex]));
    }

    const onPageChanged = (index: number) => {
        onTabIndexChanged(index, activeIndex);
    }

    const onContainerLayout = (event: LayoutChangeEvent) => {
        containerHeight.current = event.nativeEvent.layout.height;
        if (tabBarHeight.current) setPagesCollectionHeight(containerHeight.current - tabBarHeight.current);
    }

    const onTabBarLayout = (event: LayoutChangeEvent) => {
        tabBarHeight.current = event.nativeEvent.layout.height;
        if (containerHeight.current) setPagesCollectionHeight(containerHeight.current - tabBarHeight.current);
    }

    const tabPageCollectionStyles = (): ViewStyle => {
        return {
            height: pagesCollectionHeight,
        }
    }

    return (
        <TabViewContext.Provider value={tabViewContextData}>
            <Box styles={[styles]} onLayout={onContainerLayout}>
                <TabBar
                    items={tabBarItems}
                    activeItemIndex={activeIndex}
                    onPageChanged={onPageChanged}
                    onLayout={onTabBarLayout}
                    renderTabBarItem={renderTabBarItem}
                    maxItemsPerScreen={maxItemsPerScreen}
                />

                <TabPageCollection
                    styles={tabPageCollectionStyles()}
                    pages={getPages()}
                    activePageIndex={activeIndex}
                    onPageChanged={onPageChanged} />
            </Box>
        </TabViewContext.Provider>
    )
}

TabView.Page = TabPage

export {
    TabView,
    TabViewContext
}