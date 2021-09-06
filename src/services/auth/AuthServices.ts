import { IUser } from '@abstract/models/auth/IUser';
import { IAuthServices } from '@abstract/services/auth/IAuthServices';
import auth from '@react-native-firebase/auth'

class AuthServices implements IAuthServices {
    SignInWithUsernamePassword(userName: string, password: string): Promise<IUser> {
        return new Promise((resolve, reject) => {
            auth().signInWithEmailAndPassword(userName, password)
                .then((user) => resolve({
                    userName: user.user.email || ""
                }))
                .catch(error => reject(error))
        })
    }

    SignOut(): Promise<void> {
        return new Promise((resolve, reject) => {
            auth().signOut()
                .then(() => resolve())
                .catch(error => reject(error))
        })
    }
}

export default new AuthServices();