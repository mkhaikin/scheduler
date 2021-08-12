import { IUser} from "../../types/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../../types/AuthResponse";
import { API_URL } from "../../http";

export default class UserStore{
    user = {} as IUser
    isAuth = false
    isLoading = false

    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool: boolean){
        this.isAuth = bool
    }

    setUser(user: IUser) {
        this.user = user
    }

    setLoading(bool:boolean){
        this.isLoading = bool
    }

    async login(email: string, password: string){
        try {
            console.log("Userstore ----------------------, login")
            const response = await AuthService.login(email, password)
            console.log("Userstore, login: " + response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async registration(email: string, password: string){
        try {
            console.log("registration, email: " + email + ", password: " + password)
            const response = await AuthService.registration(email, password)
            console.log("registration: " + response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async logout(){
        try {
            AuthService.logout().then(()=>{
                localStorage.removeItem('token')
                this.setAuth(false)
                this.setUser({} as IUser)
            })
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth(){
        this.setLoading(true)

        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            console.log("checkAuth, this.user: " + this.user.userbadge._positionid)
        } catch (e){
            console.log(e.response?.data?.message)
        }finally{
            this.setLoading(false)
        }
    }
}