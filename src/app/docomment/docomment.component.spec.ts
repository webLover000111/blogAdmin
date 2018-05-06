import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocommentComponent } from './docomment.component';

describe('DocommentComponent', () => {
  let component: DocommentComponent;
  let fixture: ComponentFixture<DocommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
