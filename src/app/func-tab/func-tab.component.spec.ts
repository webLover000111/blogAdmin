import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncTabComponent } from './func-tab.component';

describe('FuncTabComponent', () => {
  let component: FuncTabComponent;
  let fixture: ComponentFixture<FuncTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
