import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFourIoDashboardComponent } from './movie-four-io-dashboard.component';

describe('MovieFourIoDashboardComponent', () => {
  let component: MovieFourIoDashboardComponent;
  let fixture: ComponentFixture<MovieFourIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFourIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFourIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
