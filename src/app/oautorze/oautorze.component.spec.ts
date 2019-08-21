import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OAutorzeComponent } from './oautorze.component';

describe('OAutorzeComponent', () => {
  let component: OAutorzeComponent;
  let fixture: ComponentFixture<OAutorzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OAutorzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OAutorzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
