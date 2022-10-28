import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoninfoViewComponent } from './personinfo-view.component';

describe('PersoninfoViewComponent', () => {
  let component: PersoninfoViewComponent;
  let fixture: ComponentFixture<PersoninfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoninfoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoninfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
