import $api from '../http'
import {AxiosResponse} from 'axios'
import { IJob, IDayJob } from '../types/IJob'

export default class JobService {

    static async fetchJobs(email: string): Promise<AxiosResponse<IJob[]>> {
        console.log("JobService fetchJobs ------>")
        return $api.get<IJob[]>('/job/today')
    }

    static async fetchJobsTodayFuture(): Promise<AxiosResponse<IDayJob[]>> {
        return $api.get<IDayJob[]>('/job/dayfuture')
    }

    static async fetchJobsThisWeek(): Promise<AxiosResponse<IDayJob[]>> {
        return $api.get<IDayJob[]>('/job/thisweek')
    }

    static async fetchDriverJobsToday(): Promise<AxiosResponse<IJob[]>> {
        console.log("JobService fetchDriverJobsToday ------>")
        return $api.get<IJob[]>('/job/driver/today')
    }

    static async fetchDriverJobsThisWeek(): Promise<AxiosResponse<IDayJob[]>> {
        return $api.get<IDayJob[]>('/job/driver/thisweek')
    }
    
    static async fetchDriverAllJobs(): Promise<AxiosResponse<IDayJob[]>> {
        return $api.get<IDayJob[]>('/job/driver/dayfuture')
    }

    static async deleteJobById(ind: string): Promise<AxiosResponse<any>> {
        return $api.delete<any>(`/job/${ind}`)
    }

    static async AddJob(job:IDayJob): Promise<AxiosResponse<any>> {
        return $api.post<any>('/job', job)
    }

    static async UpdateJob(job:IDayJob): Promise<AxiosResponse<any>> {
        return $api.put<any>('/job', job)
    }
}
