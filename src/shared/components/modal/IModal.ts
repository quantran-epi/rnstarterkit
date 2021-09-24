import { IStylable } from '@styles/base';
import { ViewStyle } from 'react-native';
import { ModalProps } from 'react-native-modal';

export interface IModalHeaderToolProps {
    title?: string;
    icon?: string;
    onPress?: () => void;
    component?: React.ReactNode;
}

export interface IModalHeaderProps extends IStylable<ViewStyle> {
    children?: React.ReactNode;
    toolbox?: IModalHeaderToolProps[];
    title?: string;
    subtitle?: string;
}

export interface IModalFooterProps extends IStylable<ViewStyle> {
    children?: React.ReactNode;
}

export interface IModalProps extends IStylable<ViewStyle> {
    children: React.ReactNode;
    visible: boolean;
    headerComponent?: React.ReactNode;
    footerComponent?: React.ReactNode;
    contentContainerStyles?: ViewStyle;
    innerModalProps?: Partial<Pick<ModalProps,
        "animationIn" |
        "animationOut" |
        "avoidKeyboard" |
        "onBackButtonPress" |
        "onBackdropPress" |
        "onModalHide" |
        "onModalShow" |
        "onModalWillHide" |
        "onModalWillShow" |
        "onSwipeMove" |
        "onSwipeStart" |
        "onSwipeComplete" |
        "onSwipeCancel" |
        "swipeThreshold" |
        "swipeDirection" |
        "propagateSwipe" |
        "scrollHorizontal" |
        "hasBackdrop" |
        "backdropColor" |
        "backdropOpacity">>
}