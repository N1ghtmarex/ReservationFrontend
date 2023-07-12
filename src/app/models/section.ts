import { ICoach } from "./coach";
import { IRoom } from "./room";
import { ISport } from "./sport";

export interface ISection {
    id: string,
    name: string,
    sport: ISport,
    room: IRoom,
    coach: ICoach
}