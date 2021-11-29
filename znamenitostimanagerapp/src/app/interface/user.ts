import { Role } from '../enum/role.enum'

export interface User {
    id: number;
    user: string;
    sifra: string;
    uloga?: Role;
}