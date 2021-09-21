import { IStylable } from '@styles/base';
import { LayoutChangeEvent, ViewStyle, TextStyle } from 'react-native';

interface ITabBarItemStyles {
    container?: ViewStyle;
    textStyles?: TextStyle;
}

interface ITabViewContext {
    tabBarItemStyles?: ITabBarItemStyles
}

interface ITabBarItem {
    title?: string;
    icon?: string;
    styles?: ITabBarItemStyles;
}

interface ITabBarItemProps extends IStylable<ViewStyle> {
    index: number;
    data: ITabBarItem;
    onItemPressed: (data: ITabBarItem, index: number) => void;
    isActive: boolean;
    onLayout: (event: LayoutChangeEvent) => void;
    renderItem?: (item: ITabBarItem, index: number) => React.ReactNode;
}

interface ITabBarProps extends IStylable<ViewStyle> {
    items: ITabBarItem[];
    activeItemIndex: number;
    onPageChanged: (pageIndex: number) => void;
    onLayout: (event: LayoutChangeEvent) => void;
    maxItemsPerScreen: number;
    renderTabBarItem?: (item: ITabBarItem, index: number) => React.ReactNode;
}

type TabPageCreator = (tabBarItem: ITabBarItem) => React.ReactElement;
interface ITabPageProps extends IStylable<ViewStyle> {
    children: React.ReactNode;
}

interface ITabPageCollectionProps extends IStylable<ViewStyle> {
    pages: React.ReactElement[];
    activePageIndex: number;
    onPageChanged: (pageIndex: number) => void;
}

interface ITabViewProps extends IStylable<ViewStyle> {
    activeIndex: number;
    tabBarItems: ITabBarItem[];
    tabPages: TabPageCreator[];
    onTabIndexChanged: (currentIndex: number, previousIndex?: number) => void;
    renderTabBarItem?: (item: ITabBarItem, index: number) => React.ReactNode;
    maxItemsPerScreen?: number;
    tabBarItemStyles?: ITabBarItemStyles;
}

export type {
    ITabViewContext,
    ITabBarItemStyles,
    ITabBarItem,
    ITabViewProps,
    ITabPageProps,
    ITabBarItemProps,
    ITabBarProps,
    ITabPageCollectionProps
}