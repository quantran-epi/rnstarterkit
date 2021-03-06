import { TabViewStyles } from './../components/TabView';
import { IconStyles } from './../components/Icon';
import { ButtonVariant, TabBarItemVariant, TextVariant } from '@styles/base/ComponentStyleVariant';
import { ModalStyles } from './../components/Modal';
import { BottomSheetStyles } from './../components/BottomSheet';
import { BoxStyles } from './../components/Box';
import { TextStyle } from 'react-native';
import { ParagraphStyles } from '../components/Paragraph';
import { ContainerStyles } from '../components/Container';
import { ButtonStyles } from '../components/Button';
import { IAppStyles, IComponentStyles } from "./IAppStyles";
import { ViewStyle } from 'react-native';
import { IThemeVariables } from '@styles/themes/ThemeVariables';
import { ButtonContainerStyle, AppStyleType, ButtonIconStyle, ButtonTitleStyle, IconStyle } from './ComponentStyleType';
import { DndStyles } from '@styles/components/Dnd';

class BaseComponentStyles<T extends AppStyleType, V extends string = any> implements IComponentStyles<T, V> {
    private _values: T;
    private _variants: Record<V, T>;

    constructor() {
        this._values = {} as T;
        this._variants = {} as Record<V, T>;
    }

    private _getVariant(variant: V): T {
        return this._variants[variant];
    }

    private _hasVariant(variant: V): boolean {
        return this._variants[variant] !== undefined;
    }

    protected set(styles: T): void {
        this._values = Object.assign({}, this._values, styles);
    }

    setVariant(variant: V, styles: Partial<T>): void {
        this._variants[variant] = Object.assign({}, this._variants[variant], styles);
    }

    values(variants?: V[]): T {
        if (!variants || variants.length === 0) return this._values;
        let variantStyles = variants.map(variant => this._hasVariant(variant) ? this._getVariant(variant) : {});
        return Object.assign({}, this._values, ...variantStyles);
    }
}

class AppStyles implements IAppStyles {
    _themeVariables: IThemeVariables;
    icon: IComponentStyles<IconStyle>;
    box: IComponentStyles<ViewStyle>;
    container: IComponentStyles<ViewStyle>;
    paragraph: IComponentStyles<TextStyle, TextVariant>;
    bottomSheet: {
        headerHandle: IComponentStyles<ViewStyle>;
        headerContainer: IComponentStyles<ViewStyle>;
        contentContainer: IComponentStyles<ViewStyle>;
    };
    button: {
        container: IComponentStyles<ButtonContainerStyle, ButtonVariant>,
        title: IComponentStyles<ButtonTitleStyle, ButtonVariant>,
        icon: IComponentStyles<ButtonIconStyle, ButtonVariant>
    };
    modal: {
        container: IComponentStyles<ViewStyle>,
        header: IComponentStyles<ViewStyle>,
        title: IComponentStyles<ViewStyle>,
        subtitle: IComponentStyles<ViewStyle>,
        headerTool: IComponentStyles<ViewStyle>,
        headerLeft: IComponentStyles<ViewStyle>,
        headerRight: IComponentStyles<ViewStyle>,
        contentContainer: IComponentStyles<ViewStyle>,
        footer: IComponentStyles<ViewStyle>
    };
    tabView: {
        tabBar: IComponentStyles<ViewStyle>,
        tabBarItem: IComponentStyles<ViewStyle, TabBarItemVariant>,
        tabBarItemTitle: IComponentStyles<TextStyle, TabBarItemVariant>,
        tabBarItemIcon: IComponentStyles<IconStyle, TabBarItemVariant>,
        tabPage: IComponentStyles<ViewStyle>
    };
    dnd: {
        draggable: IComponentStyles<ViewStyle>
    }

    constructor(themeVariables: IThemeVariables) {
        this._themeVariables = themeVariables;
        this.icon = new IconStyles(themeVariables);
        this.box = new BoxStyles(themeVariables);
        this.container = new ContainerStyles(themeVariables);
        this.paragraph = new ParagraphStyles(themeVariables);
        this.bottomSheet = {
            headerHandle: new BottomSheetStyles.HeaderHandleStyles(themeVariables),
            headerContainer: new BottomSheetStyles.HeaderContainerStyles(themeVariables),
            contentContainer: new BottomSheetStyles.ContentContainerStyles(themeVariables)
        }
        this.button = {
            container: new ButtonStyles.ButtonContainerStyles(themeVariables),
            title: new ButtonStyles.ButtonTitleStyles(themeVariables),
            icon: new ButtonStyles.ButtonIconStyles(themeVariables)
        }
        this.modal = {
            container: new ModalStyles.ContainerStyles(themeVariables),
            header: new ModalStyles.HeaderStyles(themeVariables),
            title: new ModalStyles.HeaderTitleStyles(themeVariables),
            subtitle: new ModalStyles.HeaderSubtitleStyles(themeVariables),
            headerTool: new ModalStyles.HeaderToolStyles(themeVariables),
            headerLeft: new ModalStyles.HeaderLeftStyles(themeVariables),
            headerRight: new ModalStyles.HeaderRightStyles(themeVariables),
            contentContainer: new ModalStyles.ContentContainerStyles(themeVariables),
            footer: new ModalStyles.FooterStyles(themeVariables),
        }
        this.tabView = {
            tabBar: new TabViewStyles.TabBarStyles(themeVariables),
            tabBarItem: new TabViewStyles.TabBarItemStyles(themeVariables),
            tabBarItemTitle: new TabViewStyles.TabBarItemTitleStyles(themeVariables),
            tabBarItemIcon: new TabViewStyles.TabBarItemIconStyles(themeVariables),
            tabPage: new TabViewStyles.TabPageStyles(themeVariables)
        }
        this.dnd = {
            draggable: new DndStyles.DraggableStyles(themeVariables)
        }
    }
}

export {
    BaseComponentStyles,
    AppStyles
}