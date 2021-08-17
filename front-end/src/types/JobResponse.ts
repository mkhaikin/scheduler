import { IJob } from "./IJob";

export interface JobResponse{
    accessToken: string;
    job: IJob[];
}