import React, { FunctionComponent } from 'react'
import { IModalProps, IModalHeaderProps, IModalFooterProps } from './IModal'
import RNModal from 'react-native-modal'
import { Box } from '@components/box'
import { ModalHeader } from './Header'
import { ModalFooter } from './Footer'
import { Scrollable } from '@components/scrollable'
import { useStyles } from '@styles/base'

type ModalCompoundComponent = FunctionComponent<IModalProps> & {
    Header: FunctionComponent<IModalHeaderProps>;
    Footer: FunctionComponent<IModalFooterProps>;
}

const Modal: ModalCompoundComponent = ({
    children,
    visible,
    headerComponent,
    footerComponent,
    styles,
    contentContainerStyles,
    innerModalProps,
}) => {
    const { theme } = useStyles();

    const renderHeader = (): React.ReactNode => {
        return headerComponent;
    }

    const renderFooter = (): React.ReactNode => {
        return footerComponent;
    }

    return (
        <RNModal
            {...innerModalProps}
            style={[theme.modal.container.values(), styles]}
            isVisible={visible}
            animationIn={innerModalProps?.animationIn || "fadeInUp"}
            animationOut={innerModalProps?.animationOut || "fadeOutDown"}
            backdropTransitionInTiming={0}
            backdropTransitionOutTiming={0}>
            <Box styles={[theme.modal.contentContainer.values(), contentContainerStyles]}>
                {renderHeader()}
                <Scrollable styles={{ flex: 1 }}>
                    {children}
                </Scrollable>
                {renderFooter()}
            </Box>
        </RNModal>
    )
}

Modal.Header = ModalHeader
Modal.Footer = ModalFooter

export {
    Modal
}

