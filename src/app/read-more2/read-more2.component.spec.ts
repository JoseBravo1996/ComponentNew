import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMore2Component } from './read-more2.component';

describe('ReadMore2Component', () => {
  let component: ReadMore2Component;
  let fixture: ComponentFixture<ReadMore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMore2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
