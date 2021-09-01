import { ILoggerConfig } from './ILoggerConfig';
import { ILogger } from './ILogger';

export class Logger implements ILogger {
    local?: boolean = true;
    onLog?: (message: string) => void = undefined;

    constructor(config?: ILoggerConfig) {
        this.local = config?.local;
        if (config?.onLog)
            this.onLog = config.onLog;
    }

    error(message: string): void {
        let body = `ERROR-${(new Date()).toUTCString()}: ${message}`;
        if (!this.local && this.onLog)
            this.onLog(body);
        else
            console.log(body);
    }
    info(message: string): void {
        let body = `INFO-${(new Date()).toUTCString()}: ${message}`;
        if (!this.local && this.onLog)
            this.onLog(body);
        else
            console.log(body);
    }
}