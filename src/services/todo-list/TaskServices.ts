import { ITask } from "@abstract/models/todo-list/ITask";
import { ITaskServices } from "@abstract/services/todo-list/ITaskServices";
import firestore from '@react-native-firebase/firestore'

class TaskServices implements ITaskServices {
    _collection: string = "Tasks";

    all(): Promise<Array<ITask>> {
        return new Promise((resolve, reject) => {
            firestore().collection(this._collection).get()
                .then(tasks => resolve(tasks.docs.map(task => ({
                    ...task.data() as ITask,
                    id: task.id
                }))))
                .catch(error => reject(error))
        })
    }
    get(taskId: string): Promise<ITask> {
        return new Promise((resolve, reject) => {
            firestore().collection(this._collection).doc(taskId).get()
                .then(task => resolve({
                    ...task.data() as ITask,
                    id: task.id,
                }))
                .catch(error => reject(error))
        })
    }
    create(task: ITask): Promise<void> {
        return new Promise((resolve, reject) => {
            firestore().collection(this._collection).doc().set(task)
                .then(() => resolve())
                .catch(error => reject(error))
        })
    }
    update(task: ITask): Promise<ITask> {
        return new Promise((resolve, reject) => {
            firestore().collection(this._collection).doc(task.id).update(task)
                .then(() => resolve(task))
                .catch(error => reject(error))
        })
    }
    delete(taskId: string): Promise<void> {
        return new Promise((resolve, reject) => {
            firestore().collection(this._collection).doc(taskId).delete()
                .then(() => resolve())
                .catch(error => reject(error))
        })
    }
}

export default new TaskServices();