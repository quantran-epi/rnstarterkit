import { useState, useEffect } from 'react';
import { IForm, IFormErrorCollection, IFormProps, IFormStatus, IFormTouchedCollection } from "./IForm";

const Form = <T>({
    initialValues,
    validate
}: IFormProps<T>): IForm<T> => {
    const [_values, _setValues] = useState<T>(initialValues);
    const [_status, _setStatus] = useState<IFormStatus<T>>({
        errors: {},
        touched: {}
    });

    const _updateStatus = (status: { errors?: IFormErrorCollection<T>, touched?: IFormTouchedCollection<T> }): void => {
        _setStatus({
            errors: status.errors || _status.errors,
            touched: status.touched || _status.touched
        })
    }

    const _isFieldTouched = (fieldName: keyof T): boolean => {
        return _status.touched[fieldName] || false;
    }

    const _validate = (): IFormErrorCollection<T> => {
        if (validate) return validate(_values, {});
        return {};
    }

    const _touchChanged = (fieldName: keyof T, newValue: T[keyof T]): IFormTouchedCollection<T> => {
        if (_isFieldTouched(fieldName)) return _status.touched;
        if (_values[fieldName] === newValue) return _status.touched;

        let clonedTouched = Object.assign({}, _status.touched);
        clonedTouched[fieldName] = true;
        return clonedTouched;
    }

    const _handleChange = (fieldName: keyof T) => (newValue: T[keyof T]) => {
        let touched = _touchChanged(fieldName, newValue);
        _updateStatus({ touched: touched })

        let cloneValues = { ..._values };
        cloneValues[fieldName] = newValue;
        _setValues(cloneValues);
    }

    useEffect(() => {
        _updateStatus({ errors: _validate() })
    }, [_values])

    return {
        hasError: Object.keys(_status.errors).length > 0,
        isTouched: Object.keys(_status.touched).length > 0,
        errors: _status.errors,
        touched: _status.touched,
        values: _values,
        handleChange: _handleChange,
        setValues: _setValues
    }
}


export const useForm = Form;