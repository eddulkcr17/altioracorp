import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClient, Client } from "../../interfaces/Client";

export interface ClientState{
    data: IClient;
    list: IClient[]
}

const initialState: ClientState = {
    data: new Client(),
    list: []
}

export const clientSlice = createSlice({
    name: 'person',
    initialState,
    reducers:{
        setData: (state, action: PayloadAction<IClient>)=> {
            state.data = action.payload    
        },
        setClients: (state, action: PayloadAction<IClient[]>)=> {
            state.list = action.payload
        }
    }
})

export const { setData, setClients }= clientSlice.actions
export default clientSlice.reducer