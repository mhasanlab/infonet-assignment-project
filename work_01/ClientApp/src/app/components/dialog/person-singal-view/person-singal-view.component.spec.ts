import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSingalViewComponent } from './person-singal-view.component';

describe('PersonSingalViewComponent', () => {
  let component: PersonSingalViewComponent;
  let fixture: ComponentFixture<PersonSingalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSingalViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonSingalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
