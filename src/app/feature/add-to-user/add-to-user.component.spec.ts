import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToUserComponent } from './add-to-user.component';

describe('AddToUserComponent', () => {
  let component: AddToUserComponent;
  let fixture: ComponentFixture<AddToUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
