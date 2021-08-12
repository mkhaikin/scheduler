import $api from '../http'
import {AxiosResponse} from 'axios'
import { IWorklog, IWorklogSum } from '../types/IWorklog'

export default class WorklogService {
    /*
    static async AddWorklog(worklog:IWorklog): Promise<AxiosResponse<any>> {
        return $api.post<any>('/worklog', worklog)
    }
    */

    static async fetchWorklogWeek(): Promise<AxiosResponse<IWorklog[]>> {
        return $api.get<IWorklog[]>('/worklog/week')
    }

    static async fetchWorklog(): Promise<AxiosResponse<IWorklog[]>> {
        return $api.get<IWorklog[]>('/worklog')
    }

    static async fetchDriverWorklog(): Promise<AxiosResponse<IWorklog[]>> {
        return $api.get<IWorklog[]>('/worklog/driver')
    }

    static async fetchWorklogSum(): Promise<AxiosResponse<IWorklogSum[]>> {
        return $api.get<IWorklogSum[]>('/worklog/sum')
    }

    static async InsertUpdateWorklog( date: string, locationid: string, bag:  string, driverid: string): Promise<AxiosResponse<any>> {
        return $api.post<any>('/worklog',  { date, locationid, bag, driverid})
    }
}
