import { IParticipntModel } from "./participant-model";

export class ParticipantModel implements IParticipntModel {
    public name: string;
    public age: number;
    public adress: string;

    constructor () {
        this.name = '';
        this.age = 0;
        this.adress = '';
    }
}