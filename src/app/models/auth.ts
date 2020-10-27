export class Usuario {
    id: number;
    sucursal: string;
    username: string;
    password: string;
    roles: string[]=[];
    permisos: number[]=[];
}