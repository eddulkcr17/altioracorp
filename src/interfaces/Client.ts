export interface IClient{
    id?: number | null,
    name: string,
    address: string,
    phone: number,
    createAt: Date| null,
    updateAt: Date| null,
}

export class Client implements IClient{
    public id?: number | null | undefined;
    public name: string;
    public address: string;
    public phone: number;
    public createAt!: Date | null;
    public updateAt!: Date | null;

    constructor(){
        this.id =null;
        this.name = "";
        this.address ="";
        this.phone = 0;
        this.createAt = null;
        this.updateAt = null;
    }

    
}