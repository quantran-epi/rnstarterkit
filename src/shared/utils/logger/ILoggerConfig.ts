export interface ILoggerConfig {
    local?: boolean;
    onLog?: (message: string) => void;
}