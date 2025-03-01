import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowMoreOptionComponent } from './row-more-option.component';

describe('RowMoreOptionComponent', () => {
  let component: RowMoreOptionComponent;
  let fixture: ComponentFixture<RowMoreOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowMoreOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowMoreOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
