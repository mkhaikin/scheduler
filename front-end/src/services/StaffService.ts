import $api from '../http'
import {AxiosResponse} from 'axios'
import { IStaff, IStaffIdName } from '../types/IStaff'

export default class StaffService {

    static async fetchStaff(): Promise<AxiosResponse<IStaff[]>> {
        return $api.get<IStaff[]>('/staff/users')
    }

    static async fetchStaffByPosition(positionid:string): Promise<AxiosResponse<IStaff[]>> {
        return $api.get<IStaff[]>('/staff/users', {params: {positionid}})
    }

    static async fetchStaffIdName(): Promise<AxiosResponse<IStaffIdName[]>> {
        return $api.get<IStaffIdName[]>('/staff/users/id')
    }

    static async UpdateStaff(staff:IStaff): Promise<AxiosResponse<any>> {
        return $api.put<any>('/staff/user', staff)
    }

    static async InsertStaff(staff:IStaff): Promise<AxiosResponse<any>> {
        return $api.post<any>('/staff/user', staff)
    }


}
