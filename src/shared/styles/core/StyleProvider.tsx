import { IAppStyles } from '@styles/base/IAppStyles';
import { DarkTheme, LightTheme } from '@styles/themes';
import { ThemeVariant } from '@styles/themes/ThemeVariant';
import React, { FunctionComponent, useState } from 'react';
import { IStyleProviderActions, IStyleProviderProps } from './IStyleProvider';

interface IStyleProviderContext extends IStyleProviderActions {
    theme: IAppStyles;
}

const Context = React.createContext<IStyleProviderContext>({
    theme: new LightTheme(),
    switchTheme: () => { }
});

const StyleProvider: FunctionComponent<IStyleProviderProps> = ({
    children,
    defaultTheme = "light"
}) => {
    const _switchTheme = (variant: ThemeVariant): void => {
        switch (variant) {
            case "light": setContext({ ...context, theme: new LightTheme() }); break;
            case "dark": setContext({ ...context, theme: new DarkTheme() }); break;
            default: setContext({ ...context, theme: new LightTheme() }); break;
        }
    }

    const _initialTheme = (): IStyleProviderContext => {
        const styleContext = {} as IStyleProviderContext;
        styleContext.switchTheme = _switchTheme;
        switch (defaultTheme) {
            case "light":
                styleContext.theme = new LightTheme();
                break;
            case "dark":
                styleContext.theme = new DarkTheme();
                break;
        }
        return styleContext;
    }

    const [context, setContext] = useState<IStyleProviderContext>(_initialTheme)

    return <Context.Provider value={context}>
        {children}
    </Context.Provider>
}

export {
    StyleProvider,
    Context
}