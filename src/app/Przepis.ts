import { Skladnik } from './Skladnik';

export class Przepis {
    id: number;
    nazwaPotrawy: string;
    opis: string;
    skladniki: Array<Skladnik>;
}
