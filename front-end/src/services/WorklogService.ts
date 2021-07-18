import $api from '../http'
import {AxiosResponse} from 'axios'
import { IWorklog, IWorklogSum } from '../types/IWorklog'

export default class WorklogService {

    static async fetchWorklogWeek(): Promise<AxiosResponse<IWorklog[]>> {
        return $api.get<IWorklog[]>('/worklog/week')
    }

    static async fetchWorklog(): Promise<AxiosResponse<IWorklog[]>> {
        return $api.get<IWorklog[]>('/worklog')
    }

    static async fetchWorklogSum(): Promise<AxiosResponse<IWorklogSum[]>> {
        return $api.get<IWorklogSum[]>('/worklog/sum')
    }
}
