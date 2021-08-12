import $api from '../http'
import {AxiosResponse} from 'axios'
import { ILocation } from '../types/ILocation'

export default class LocationService {

    static async fetchLocations(): Promise<AxiosResponse<ILocation[]>> {
        return $api.get<ILocation[]>('/locations')
    }

    static async fetchLocationsByRoute(ind: string): Promise<AxiosResponse<ILocation[]>> {
        return $api.get<ILocation[]>(`/locations/route/${ind}`)
    }

    static async fetchLocationsByArea(area: string): Promise<AxiosResponse<ILocation[]>> {
        return $api.get<ILocation[]>(`/locations/area/${area}`)
    }

    static async fetchLocationById(ind: string): Promise<AxiosResponse<ILocation>> {
        return $api.get<ILocation>(`/locations/${ind}`)
    }

    static async InsertLocation(location:ILocation): Promise<AxiosResponse<any>> {
        return $api.post<any>('/location', location)
    }

    static async UpdateLocation(location:ILocation): Promise<AxiosResponse<any>> {
        return $api.put<any>('/location', location)
    }

    static async deleteLocationById(ind: string): Promise<AxiosResponse<any>> {
        return $api.get<any>(`/locations/${ind}`)
    }
}
