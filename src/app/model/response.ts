import { Database } from "./database/database";

export interface Response {
    success: string,
    data: Database[]
}
