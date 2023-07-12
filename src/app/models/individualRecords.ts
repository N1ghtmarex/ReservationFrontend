import { ICoach } from "./coach";
import { ISport } from "./sport";

export interface IIndividualRecords {
    id: string,
    date: string,
    endDate: string,
    coach: ICoach,
    sport: ISport
}