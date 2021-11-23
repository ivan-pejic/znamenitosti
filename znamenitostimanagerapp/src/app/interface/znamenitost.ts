import { Status } from "../enum/status.enum";

export interface Znamenitost {
    id: number;
    naziv: string;
    latituda: string;
    longituda: string;
    opcina: string;
    drzava: string;
    glavnaSlika: string;
    status: Status
}