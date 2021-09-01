import { ITaskServices } from "@abstract/services/todo-list/ITaskServices";

export interface IEpicDependencies {
    Services: {
        Task: ITaskServices
    }
}