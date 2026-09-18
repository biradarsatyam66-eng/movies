import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFiveDashboardComponent } from './movie-five-dashboard.component';

describe('MovieFiveDashboardComponent', () => {
  let component: MovieFiveDashboardComponent;
  let fixture: ComponentFixture<MovieFiveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFiveDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
