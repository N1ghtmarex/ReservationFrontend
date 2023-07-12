import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/models/room';
import { ISport } from 'src/app/models/sport';
import { RoomsService } from 'src/app/services/rooms.service';
import { SectionsService } from 'src/app/services/sections.service';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {

  sports!: ISport[]
  rooms!: IRoom[]

  name!: string
  sportId!: string
  roomId!: string

  constructor(private sportService: SportsService,
              private roomService: RoomsService,
              private sectionService: SectionsService) {}

  ngOnInit(): void {
    this.getSports()
    this.getRooms()
  }

  getSports() {
    this.sportService.getSports().subscribe((any) => {
      this.sports = any.sports
    })
  }

  getRooms() {
    this.roomService.getRooms().subscribe((any) => {
      this.rooms = any.rooms
    })
  }

  addSection() {
    this.sectionService.addSection(this.name, this.sportId, this.roomId).subscribe((any) => {
    })
  }
}
