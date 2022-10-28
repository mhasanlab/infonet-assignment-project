import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoninfoCreateComponent } from './personinfo-create.component';

describe('PersoninfoCreateComponent', () => {
  let component: PersoninfoCreateComponent;
  let fixture: ComponentFixture<PersoninfoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoninfoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoninfoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
