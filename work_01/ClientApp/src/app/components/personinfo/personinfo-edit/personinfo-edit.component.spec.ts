import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoninfoEditComponent } from './personinfo-edit.component';

describe('PersoninfoEditComponent', () => {
  let component: PersoninfoEditComponent;
  let fixture: ComponentFixture<PersoninfoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoninfoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoninfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
