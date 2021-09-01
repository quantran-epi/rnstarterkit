export type IAction<M = never> = {
    type: string;
} & ([M] extends [never] ? {} : {
    meta: M;
})