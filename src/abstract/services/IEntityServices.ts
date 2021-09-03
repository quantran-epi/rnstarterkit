export interface IEntityServices<T> {
    all: () => Promise<Array<T>>;
    get: (key: string) => Promise<T>;
    create: (item: T) => Promise<void>;
    update: (item: T) => Promise<T>;
    delete: (key: string) => Promise<void>;
}