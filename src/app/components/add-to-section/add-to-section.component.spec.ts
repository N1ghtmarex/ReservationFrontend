import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToSectionComponent } from './add-to-section.component';

describe('AddToSectionComponent', () => {
  let component: AddToSectionComponent;
  let fixture: ComponentFixture<AddToSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToSectionComponent]
    });
    fixture = TestBed.createComponent(AddToSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
