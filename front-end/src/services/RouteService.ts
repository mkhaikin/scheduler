import $api from '../http'
import {AxiosResponse} from 'axios'
import { IRoute } from '../types/IRoute'

export default class RouteService {

    static async fetchRoutes(): Promise<AxiosResponse<IRoute[]>> {
        return $api.get<IRoute[]>('/routes')
    }

    static async AddRout(route:IRoute): Promise<AxiosResponse<any>> {
        return $api.post<any>('/route', route)
    }

    static async UpdateRoute(route:IRoute): Promise<AxiosResponse<any>> {
        return $api.put<any>('/route', route)
    }

    
}
