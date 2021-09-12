import { useContext } from 'react';
import { IStyleProviderActions } from './IStyleProvider';
import { IAppStyles } from "./IAppStyles";
import { Context } from './StyleProvider';

interface IStyles extends IStyleProviderActions {
    theme: IAppStyles;
}

const Style = (): IStyles => {
    const styleContext = useContext(Context)

    return {
        theme: styleContext.theme,
        switchTheme: styleContext.switchTheme
    }
}

export const useStyles = Style;