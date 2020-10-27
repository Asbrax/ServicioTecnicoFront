import {Role} from './roles';
export class Usuario {
    id: number;
    username: string;
    sucursal: string;
    cajaChica: string;
    roles: Role[]=[];
    password: string;
    permisos: string;
}