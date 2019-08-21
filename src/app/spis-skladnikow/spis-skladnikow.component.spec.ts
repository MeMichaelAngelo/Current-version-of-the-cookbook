import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpisSkladnikowComponent } from './spis-skladnikow.component';

describe('SpisSkladnikowComponent', () => {
  let component: SpisSkladnikowComponent;
  let fixture: ComponentFixture<SpisSkladnikowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpisSkladnikowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpisSkladnikowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
