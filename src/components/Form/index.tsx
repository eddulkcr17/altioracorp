import { IClient, Client } from "../../interfaces/Client";
import { useDispatch, useSelector } from "react-redux";
import { ClientState, setData, setClients } from "../../feature/client/clientSlice";
import { ClientService } from "../../service/client.service";
import Swal from "sweetalert2";

export const Form =() =>{
    const { client } =useSelector((state:{client: ClientState})=> state);
    const dispatch = useDispatch();
    const clientService = new ClientService();
    const setFormValue = (event:React.ChangeEvent<HTMLInputElement>)=> {
        dispatch(setData({... client.data, [event.target.id]: event.target.value}))
    }
    const fetchUpdate = async (event:React.FormEvent<HTMLFormElement>)=>{
        try {
            event.preventDefault()
            const data:IClient = await clientService.put(client.data)

            const dataArray:IClient[] = [ ...client.list]
            
            let index:number = dataArray.findIndex((item:IClient)=> item.id === data.id)

            dataArray.splice(index,1,data);
            dispatch(setClients(dataArray))
            dispatch(setData(new Client()))

            Swal.fire({
                icon: 'success',
                title: 'la informacion fue actualizada'
            })
        } catch (error) {
            console.log(error)
        }
    }
    const fetchCreate = async(event:React.FormEvent<HTMLFormElement>)=>{
        try {
            event.preventDefault()
            const data:IClient =await clientService.post(client.data)
            dispatch(setData(new Client()))

            const dataArray:IClient[] = [... client.list]
            dataArray.push(data)
            dispatch(setClients(dataArray))

            Swal.fire({
                icon: 'success',
                title: 'la data fue creada'
            })
        } catch (error) {
            console.log(error)
        }
    }
}

return(
    <div className="px-8 py-4 pb-8 rounded-lg bg-gray-50">
        <form onSubmit={(e)=> clientSlice.data.id?fetchUpdate(e):fetchCreate(e)}>
            <div className="mt-4">
                <label className="mb-2 text-gray-800">Name</label>
                <input 
                type="text"
                id="name"
                placeholder="Nombre"
                value={client.data.name}
                onChange={(e)=> setFormValue(e)}
                className="block w-full px-5 py-2.5 text-gray-700 placeholder-gray-400 bg-white border=gray-200"
                />
            </div>
            <div className="mt-4">
                <label className="mb-2 text-gray-800">Name</label>
                <input 
                type="text"
                id="address"
                placeholder="Direccion"
                value={client.data.address}
                onChange={(e)=> setFormValue(e)}
                className="block w-full px-5 py-2.5 text-gray-700 placeholder-gray-400 bg-white border=gray-200"
                />
            </div>
            <div className="mt-4">
                <label className="mb-2 text-gray-800">Name</label>
                <input 
                type="text"
                id="phone"
                placeholder="Nombre"
                value={client.data.phone}
                onChange={(e)=> setFormValue(e)}
                className="block w-full px-5 py-2.5 text-gray-700 placeholder-gray-400 bg-white border=gray-200"
                />
            </div>
            <button className="w-full mt-8 bg-teal-600 text-gray-50 font-semibold py-2 px 4 rounder-lg">
                {client.data.id?"Save":"Create"}
            </button>
        </form>
    </div>
)

