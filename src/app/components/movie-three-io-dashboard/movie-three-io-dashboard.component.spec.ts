import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieThreeIoDashboardComponent } from './movie-three-io-dashboard.component';

describe('MovieThreeIoDashboardComponent', () => {
  let component: MovieThreeIoDashboardComponent;
  let fixture: ComponentFixture<MovieThreeIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieThreeIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieThreeIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
