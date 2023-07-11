import { ICoach } from "./coach";
import { IRoom } from "./room";
import { ISport } from "./sport";

export interface ISection {
    Id: string,
    Name: string,
    Sport: ISport,
    Room: IRoom,
    Coach: ICoach
}