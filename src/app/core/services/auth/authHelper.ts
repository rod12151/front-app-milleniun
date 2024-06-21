let baserUrl='https://3.17.62.147/'
export default baserUrl;

export interface DecodeToken{
    roles:string[],
    isAdmin:boolean,
    isDocente:boolean,
    isStudent:boolean,
    sub:string
}
export class Roles{
    isAdmin?:boolean;
    isDocente?:boolean;
    isStudent?:boolean;
    constructor(admin:boolean,docente:boolean,estudianet:boolean){
        this.isAdmin=admin;
        this.isDocente=docente;
        this.isStudent=estudianet;

    }
}

export interface UserRequest{
    dni:string;
    fullName:string;
    idUser:number;
    username:string
}

export interface UserLogget{
    id:Number,
    name:String,
    email:String,
    avatar:String

}