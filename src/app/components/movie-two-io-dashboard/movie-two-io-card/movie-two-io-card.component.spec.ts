import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTwoIoCardComponent } from './movie-two-io-card.component';

describe('MovieTwoIoCardComponent', () => {
  let component: MovieTwoIoCardComponent;
  let fixture: ComponentFixture<MovieTwoIoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTwoIoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTwoIoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
