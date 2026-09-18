import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFiveCardComponent } from './movie-five-card.component';

describe('MovieFiveCardComponent', () => {
  let component: MovieFiveCardComponent;
  let fixture: ComponentFixture<MovieFiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFiveCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
