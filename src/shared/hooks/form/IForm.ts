type IFormValue = string | number | boolean;
type IFormValues = Record<string, IFormValue>;

type IFormErrorCollection<T extends IFormValues> = Partial<Record<keyof T, string>>;
type IFormTouchedCollection<T extends IFormValues> = Partial<Record<keyof T, boolean>>;

interface IFormStatus<T extends IFormValues> {
    errors: IFormErrorCollection<T>;
    touched: IFormTouchedCollection<T>;
}

interface IForm<T extends IFormValues> {
    values: T;
    touched: IFormTouchedCollection<T>;
    errors: IFormErrorCollection<T>;
    hasError: boolean;
    isTouched: boolean;
    handleChange: (fieldName: keyof T) => (newValue: T[keyof T]) => void;
    setValues: (values: T) => void;
}

interface IFormProps<T extends IFormValues> {
    initialValues: T;
    validate?: (values: T, currentErrors: IFormErrorCollection<T>) => IFormErrorCollection<T>;
}

export type {
    IFormValue,
    IFormValues,
    IFormStatus,
    IForm,
    IFormProps,
    IFormErrorCollection,
    IFormTouchedCollection
}