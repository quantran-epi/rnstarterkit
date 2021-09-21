import { Box } from '@components/box'
import { Scrollable } from '@components/scrollable'
import { useStyles } from '@styles/base'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { LayoutChangeEvent, LayoutRectangle, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ITabBarProps, ITabBarItem } from './ITabView'
import { TabBarItem } from './TabBarItem'

export const TabBar: FunctionComponent<ITabBarProps> = ({
    items,
    activeItemIndex,
    onPageChanged,
    onLayout,
    renderTabBarItem,
    styles,
    maxItemsPerScreen,
}) => {
    const scrollViewRef = React.createRef<ScrollView>()
    const { theme } = useStyles();
    const scrollExtraDistance = useRef(40);
    const itemsLayout = useRef<LayoutRectangle[]>(new Array(items.length));
    const [tabBarLayout, setTabBarLayout] = useState<LayoutRectangle>({
        height: 0,
        width: 0,
        x: 0,
        y: 0
    })

    useEffect(() => {
        handleScroll(activeItemIndex);
    }, [activeItemIndex])

    const tabBarItemWidth = React.useMemo((): number => {
        if (items.length <= maxItemsPerScreen)
            return tabBarLayout.width / items.length;
        else
            return (tabBarLayout.width / maxItemsPerScreen) - scrollExtraDistance.current / 5;
    }, [tabBarLayout])

    const onTabBarLayout = (event: LayoutChangeEvent) => {
        setTabBarLayout(event.nativeEvent.layout);
        onLayout(event);
    }

    const onTabBarItemLayout = (event: LayoutChangeEvent, index: number) => {
        itemsLayout.current[index] = event.nativeEvent.layout;
    }

    const handleScroll = (index: number) => {
        let itemLayout = itemsLayout.current[index];
        if (itemLayout === undefined) return;
        scrollViewRef.current?.scrollTo({ x: itemLayout.x - scrollExtraDistance.current })
    }

    const onItemPressed = (data: ITabBarItem, index: number) => {
        onPageChanged(index);
    }

    return (
        <Box styles={[theme.tabView.tabBar.values(), styles]} onLayout={onTabBarLayout}>
            <Scrollable
                ref={scrollViewRef}
                horizontal
                innerScrollViewProps={{
                    showsHorizontalScrollIndicator: false,
                }}>
                {items.map((item, index) =>
                    <TabBarItem
                        index={index}
                        styles={{ width: tabBarItemWidth }}
                        key={index}
                        isActive={activeItemIndex === index}
                        data={item}
                        onItemPressed={onItemPressed}
                        onLayout={(event) => onTabBarItemLayout(event, index)}
                        renderItem={renderTabBarItem} />)}
            </Scrollable>
        </Box>
    )
}