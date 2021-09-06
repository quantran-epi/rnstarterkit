import { useForm } from '@hooks/form'
import React from 'react'
import { Button, KeyboardAvoidingView, Text, TextInput } from 'react-native'
import { IUserLoginUsernamePasswordViewModel } from '../view-models/IUserViewModel'
import { useDispatch } from 'react-redux'
import { signInUsernamePassword, signInWithGoogle } from '../reducers/AuthReducer'

export const Login = () => {
    const dispatch = useDispatch();
    const { values, errors, touched, hasError, handleChange }
        = useForm<IUserLoginUsernamePasswordViewModel>({
            initialValues: { Username: "", Password: "" },
            validate: (values, errors) => {
                if (values.Username === "") errors.Username = "Username is required";
                if (values.Password === "") errors.Password = "Password is required";
                return errors;
            }
        })

    const onSignInUsernamePassword = () => {
        dispatch(signInUsernamePassword({ Username: values.Username, Password: values.Password }))
    }

    const onSignInWithGoogle = () => {
        dispatch(signInWithGoogle())
    }

    return (
        <KeyboardAvoidingView>
            <TextInput placeholder="Username" value={values.Username} onChangeText={handleChange("Username")} />
            {touched.Username && errors.Username && <Text>{errors.Username}</Text>}
            <TextInput placeholder="Password" secureTextEntry value={values.Password} onChangeText={handleChange("Password")} />
            {touched.Password && errors.Password && <Text>{errors.Password}</Text>}
            <Button title="Sign In" disabled={hasError} onPress={onSignInUsernamePassword} />
            <Button title="Sign In with Google" onPress={onSignInWithGoogle} />
        </KeyboardAvoidingView>
    )
}