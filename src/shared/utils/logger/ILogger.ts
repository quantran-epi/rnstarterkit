export interface ILogger {
    local?: boolean;
    onLog?: (message: string) => void;
    error: (message: string) => void;
    info: (message: string) => void;
}