import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIndividualRecordComponent } from './create-individual-record.component';

describe('CreateIndividualRecordComponent', () => {
  let component: CreateIndividualRecordComponent;
  let fixture: ComponentFixture<CreateIndividualRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateIndividualRecordComponent]
    });
    fixture = TestBed.createComponent(CreateIndividualRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
