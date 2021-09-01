import { HttpClient as HttpClientImplementation } from './HttpClient'

export const HttpClient = new HttpClientImplementation("", {
    timeout: 30000
});