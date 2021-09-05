type IFormErrorCollection<T> = Partial<Record<keyof T, string>>;
type IFormTouchedCollection<T> = Partial<Record<keyof T, boolean>>;

interface IFormStatus<T> {
    errors: IFormErrorCollection<T>;
    touched: IFormTouchedCollection<T>;
}

interface IForm<T> {
    values: T;
    touched: IFormTouchedCollection<T>;
    errors: IFormErrorCollection<T>;
    hasError: boolean;
    isTouched: boolean;
    handleChange: (fieldName: keyof T) => (newValue: T[keyof T]) => void;
    setValues: (values: T) => void;
}

interface IFormProps<T> {
    initialValues: T;
    validate?: (values: T, currentErrors: IFormErrorCollection<T>) => IFormErrorCollection<T>;
}

export type {
    IFormStatus,
    IForm,
    IFormProps,
    IFormErrorCollection,
    IFormTouchedCollection
}