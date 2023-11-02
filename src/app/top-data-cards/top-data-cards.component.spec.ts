import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDataCardsComponent } from './top-data-cards.component';

describe('TopDataCardsComponent', () => {
  let component: TopDataCardsComponent;
  let fixture: ComponentFixture<TopDataCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopDataCardsComponent]
    });
    fixture = TestBed.createComponent(TopDataCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
