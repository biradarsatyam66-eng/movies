import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFourIoFormComponent } from './movie-four-io-form.component';

describe('MovieFourIoFormComponent', () => {
  let component: MovieFourIoFormComponent;
  let fixture: ComponentFixture<MovieFourIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFourIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFourIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
