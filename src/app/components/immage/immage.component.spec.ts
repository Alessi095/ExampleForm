import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmageComponent } from './immage.component';

describe('ImmageComponent', () => {
  let component: ImmageComponent;
  let fixture: ComponentFixture<ImmageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
