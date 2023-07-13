import { Component, OnInit } from '@angular/core';
import { ISection } from 'src/app/models/section';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-add-to-section',
  templateUrl: './add-to-section.component.html',
  styleUrls: ['./add-to-section.component.scss']
})
export class AddToSectionComponent implements OnInit {
  sections!: ISection[]

  constructor(private sectionService: SectionsService){
  }

  ngOnInit(): void {
    this.getSections()
  }

  getSections() {
    this.sectionService.getSectionForRecord().subscribe((any) => {
      this.sections = any.sections
    })
  }

  addToSection(id: string) {
    this.sectionService.addClientToSection(id).subscribe((any) => {
    })
  }
}
