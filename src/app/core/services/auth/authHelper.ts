let baserUrl='https://3.145.98.70:8080/'
//let baserUrl = 'http://localhost:8080'
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