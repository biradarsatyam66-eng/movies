import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTwoIoDashboardComponent } from './movie-two-io-dashboard.component';

describe('MovieTwoIoDashboardComponent', () => {
  let component: MovieTwoIoDashboardComponent;
  let fixture: ComponentFixture<MovieTwoIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTwoIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTwoIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
