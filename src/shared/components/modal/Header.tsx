import { Box } from '@components/box'
import { Title } from '@components/title'
import { useStyles } from '@styles/base'
import React, { FunctionComponent } from 'react'
import { ModalHeaderTool } from './HeaderTool'
import { IModalHeaderProps } from './IModal'

export const ModalHeader: FunctionComponent<IModalHeaderProps> = ({
    children,
    styles,
    title,
    subtitle,
    toolbox
}) => {
    const { theme } = useStyles();

    const renderToolbox = (): React.ReactNode => {
        return toolbox?.map((tool, index) => <ModalHeaderTool
            component={tool.component}
            title={tool.title}
            icon={tool.icon}
            onPress={tool.onPress}
            key={index} />)
    }

    return (
        <Box styles={[theme.modal.header.values(), styles]}>
            {children || <React.Fragment>
                <Box styles={[theme.modal.headerLeft.values()]}>
                    {title && <Title styles={[theme.modal.title.values()]}>{title}</Title>}
                    {subtitle && <Title styles={[theme.modal.subtitle.values()]}>{subtitle}</Title>}
                </Box>
                <Box styles={[theme.modal.headerRight.values()]}>
                    {renderToolbox()}
                </Box>
            </React.Fragment>}
        </Box>
    )
}