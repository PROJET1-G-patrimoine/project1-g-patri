// src/types.ts
import { RaRecord } from 'react-admin';

export interface Possesseur {
    nom: string;
}

export interface Devise {
    nom: string;
}

export interface Patrimoine extends RaRecord {
    id: number;
    nom: string;
    possesseur: Possesseur;
    t: string;
    valeur_comptable: number;
}

export interface Possession extends RaRecord {
    id: number;
    nom: string;
    t: string;
    valeur_comptable: number;
    devise: Devise;
}
