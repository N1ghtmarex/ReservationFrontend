import { ISection } from "./section";

export interface ISectionReservations {
    id: string,
    dayOfWeek: number,
    startTime: string,
    endTime: string,
    period: string,
    section: ISection
}





