import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbiorPrzepisowComponent } from './zbior-przepisow.component';

describe('ZbiorPrzepisowComponent', () => {
  let component: ZbiorPrzepisowComponent;
  let fixture: ComponentFixture<ZbiorPrzepisowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbiorPrzepisowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbiorPrzepisowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
