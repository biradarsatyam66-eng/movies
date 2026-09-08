import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOneIoFormComponent } from './movie-one-io-form.component';

describe('MovieOneIoFormComponent', () => {
  let component: MovieOneIoFormComponent;
  let fixture: ComponentFixture<MovieOneIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieOneIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieOneIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
