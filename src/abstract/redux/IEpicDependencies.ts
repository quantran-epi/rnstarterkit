import { IAuthServices } from "@abstract/services/auth/IAuthServices";
import { ITaskServices } from "@abstract/services/todo-list/ITaskServices";

export interface IEpicDependencies {
    Services: {
        Auth: IAuthServices,
        Task: ITaskServices,
    }
}