import { Role } from '../enum/role.enum'

export interface User {
    user: string;
    sifra: string;
    uloga?: Role;
}