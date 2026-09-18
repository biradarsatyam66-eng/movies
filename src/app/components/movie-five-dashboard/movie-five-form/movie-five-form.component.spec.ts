import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFiveFormComponent } from './movie-five-form.component';

describe('MovieFiveFormComponent', () => {
  let component: MovieFiveFormComponent;
  let fixture: ComponentFixture<MovieFiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
