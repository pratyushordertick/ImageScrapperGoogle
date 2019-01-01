import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHistoryComponent } from './selected-history.component';

describe('SelectedHistoryComponent', () => {
  let component: SelectedHistoryComponent;
  let fixture: ComponentFixture<SelectedHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
