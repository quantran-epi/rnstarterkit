import { Box } from '@components/box'
import { Button } from '@components/button'
import { useStyles } from '@styles/base'
import React, { FunctionComponent, useContext } from 'react'
import { TabViewContext } from './TabView'
import { ITabBarItemProps } from './ITabView'

export const TabBarItem: FunctionComponent<ITabBarItemProps> = ({
    index,
    data,
    isActive,
    onItemPressed,
    onLayout,
    styles,
    renderItem
}) => {
    const { theme } = useStyles();
    const context = useContext(TabViewContext);

    const onPress = () => {
        onItemPressed(data, index);
    }

    const defaultRenderItem = (): React.ReactNode => {
        return <Button
            styles={[theme.tabView.tabBarItem.values(isActive ? ["active"] : []), styles, context.tabBarItemStyles?.container, data.styles?.container]}
            color="transparent"
            title={data.title}
            iconStyles={theme.tabView.tabBarItemIcon.values(isActive ? ["active"] : [])}
            titleStyles={{ ...theme.tabView.tabBarItemTitle.values(isActive ? ["active"] : []), ...context.tabBarItemStyles?.textStyles, ...data.styles?.textStyles }}
            icon={data.icon}
            onPress={onPress}
            onLayout={onLayout} />
    }

    const customRenderItem = (): React.ReactNode => {
        return <Box onLayout={onLayout} styles={[styles]}>
            {renderItem && renderItem(data, index)}
        </Box>
    }

    return (
        <React.Fragment>
            {renderItem ? customRenderItem() : defaultRenderItem()}
        </React.Fragment>
    )
}
