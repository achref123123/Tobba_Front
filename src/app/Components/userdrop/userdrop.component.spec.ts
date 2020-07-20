import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdropComponent } from './userdrop.component';

describe('UserdropComponent', () => {
  let component: UserdropComponent;
  let fixture: ComponentFixture<UserdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
