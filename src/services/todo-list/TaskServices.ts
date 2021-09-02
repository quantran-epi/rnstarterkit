import { ITask } from "@abstract/models/todo-list/ITask";
import { ITaskServices } from "@abstract/services/todo-list/ITaskServices";
import firestore from '@react-native-firebase/firestore'

class TaskServices implements ITaskServices {
    all(): Promise<Array<ITask>> {
        return new Promise((resolve, reject) => {
            firestore().collection('Tasks').get()
                .then(tasks => resolve(tasks.docs.map(task => task.data() as ITask)))
                .catch(error => reject(error))
        })
    }
    get(taskId: string): Promise<ITask> {
        return new Promise((resolve, reject) => {
            resolve({} as ITask)
        })
    }
    create(task: ITask): Promise<string> {
        return new Promise((resolve, reject) => {
            resolve("")
        })
    }
    update(task: ITask): Promise<ITask> {
        return new Promise((resolve, reject) => {
            resolve(task)
        })
    }
    delete(taskId: string): Promise<null> {
        return new Promise((resolve, reject) => {
            resolve(null)
        })
    }
}

export default new TaskServices();