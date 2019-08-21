import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdycjaPrzepisuComponent } from './edycja-przepisu.component';

describe('EdycjaPrzepisuComponent', () => {
  let component: EdycjaPrzepisuComponent;
  let fixture: ComponentFixture<EdycjaPrzepisuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdycjaPrzepisuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdycjaPrzepisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
