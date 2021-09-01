import { ITask } from "@abstract/models/todo-list/ITask";
import { ITaskServices } from "@abstract/services/todo-list/ITaskServices";
import { HttpClient } from "@utils/http";

class TaskServices implements ITaskServices {
    all(): Promise<Array<ITask>> {
        return new Promise((resolve, reject) => {
            HttpClient.get<Array<ITask>>("https://qtapp-35219-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json")
                .then(response => resolve(response.data))
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