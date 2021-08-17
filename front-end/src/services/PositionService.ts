import $api from '../http'
import {AxiosResponse} from 'axios'
import { IPosition } from '../types/IPosition'

export default class PositionService {

    static async fetchPositions(): Promise<AxiosResponse<IPosition[]>> {
        return $api.get<IPosition[]>('/staff/positions')
    }

    
}
