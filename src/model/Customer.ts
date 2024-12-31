

export class Customer {
    id : string;
    name : string;
    email : string;
    mobile : number;

    constructor( id: string, name : string, email : string, mobile : number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }
}