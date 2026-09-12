import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFourIoCardComponent } from './movie-four-io-card.component';

describe('MovieFourIoCardComponent', () => {
  let component: MovieFourIoCardComponent;
  let fixture: ComponentFixture<MovieFourIoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFourIoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFourIoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
