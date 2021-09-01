export type IPayloadAction<P = void, M = never> = {
    payload: P;
    type: string;
} & ([M] extends [never] ? {} : {
    meta: M;
})