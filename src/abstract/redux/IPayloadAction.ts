export type IPayloadAction<P = void, Meta = never> = {
    payload: P & { message?: string };
    type: string;
} & ([Meta] extends [never] ? {} : {
    meta: Meta;
})