import { api, headerAPI } from "../configs/axios"
import { IClient } from "../interfaces/Client"

export class ClientService{

    private apiURL = "v1/persons";

    public async getAll(){
        try{
            const response = await api.get<IClient[]>(`${this.apiURL}`)
            return await response.data
        }catch(error){
            console.log(error)
            throw error;
        }
    }

    public async post(data: IClient){
        try {
            const response = await api.post<IClient[]>(`${this.apiURL}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(id: number){
        try {
            const response = await api.get<IClient>(`${this.apiURL}/${id}`,headerAPI)
            const data : IClient = response.data
            return data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async put (data: IClient){
        try {
            const response = await api.put<IClient>(`${this.apiURL}/${data.id}`, data, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async delete (data: IClient){
        try {
            const response = await api.delete(`${this.apiURL}/${data.id}`, headerAPI)
            return await response.data
        } catch (error) {
            console.log(error)
            throw error;            
        }
    }

}