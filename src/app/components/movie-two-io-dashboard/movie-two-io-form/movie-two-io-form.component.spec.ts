import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTwoIoFormComponent } from './movie-two-io-form.component';

describe('MovieTwoIoFormComponent', () => {
  let component: MovieTwoIoFormComponent;
  let fixture: ComponentFixture<MovieTwoIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTwoIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTwoIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
