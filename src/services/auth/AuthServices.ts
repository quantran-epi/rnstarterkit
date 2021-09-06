import { IUser } from '@abstract/models/auth/IUser';
import { IAuthServices } from '@abstract/services/auth/IAuthServices';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '565772507131-3di2m9pd92ndgt72816rtgjvfkhmreal.apps.googleusercontent.com',
})

class AuthServiceHelpers {
    static MapFirebaseUserToIUser(firebaseUser: FirebaseAuthTypes.User): IUser {
        return {
            userName: firebaseUser.email || ""
        }
    }
}

class AuthServices implements IAuthServices {
    SignInWithUsernamePassword(userName: string, password: string): Promise<IUser> {
        return new Promise((resolve, reject) => {
            auth().signInWithEmailAndPassword(userName, password)
                .then(userCredential => resolve(AuthServiceHelpers.MapFirebaseUserToIUser(userCredential.user)))
                .catch(error => reject(error))
        })
    }

    SignInWithGoogle(): Promise<IUser> {
        return new Promise((resolve, reject) => {
            GoogleSignin.signIn()
                .then(user => {
                    const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
                    return auth().signInWithCredential(googleCredential)
                })
                .then(userCredential => resolve(AuthServiceHelpers.MapFirebaseUserToIUser(userCredential.user)))
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

export {
    AuthServiceHelpers
};
export default new AuthServices();