import $api from '../http'
import {AxiosResponse} from 'axios'
import { IJob } from '../types/IJob'

export default class JobService {

    static async fetchJobs(email: string): Promise<AxiosResponse<IJob[]>> {
        return $api.get<IJob[]>('/driver/todayjobs')
    }


}
