import { AuthNavigatorParamList } from "@modules/auth/navigation/Routes"
import { TodoListNavigatorParamList } from "@modules/todo-list/navigation/Routes"

type NestedNavigatorParams<ParamList> = {
    [K in keyof ParamList]: undefined extends ParamList[K]
    ? { screen: K; params?: ParamList[K] }
    : { screen: K; params: ParamList[K] }
}[keyof ParamList]

type RootNavigatorParamList = {
    "SplashScreen": undefined,
    "Auth": NestedNavigatorParams<AuthNavigatorParamList>,
    "Authorized": NestedNavigatorParams<AuthorizedNavigatorParamList>;
}

type AuthorizedNavigatorParamList = {
    "Authorized/TodoList": NestedNavigatorParams<TodoListNavigatorParamList>;
}

export type {
    NestedNavigatorParams,
    RootNavigatorParamList,
    AuthorizedNavigatorParamList,
}