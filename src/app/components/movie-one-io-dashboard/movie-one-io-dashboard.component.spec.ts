import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOneIoDashboardComponent } from './movie-one-io-dashboard.component';

describe('MovieOneIoDashboardComponent', () => {
  let component: MovieOneIoDashboardComponent;
  let fixture: ComponentFixture<MovieOneIoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieOneIoDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieOneIoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
