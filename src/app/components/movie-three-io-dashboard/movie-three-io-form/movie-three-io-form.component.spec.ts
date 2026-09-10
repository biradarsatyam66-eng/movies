import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieThreeIoFormComponent } from './movie-three-io-form.component';

describe('MovieThreeIoFormComponent', () => {
  let component: MovieThreeIoFormComponent;
  let fixture: ComponentFixture<MovieThreeIoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieThreeIoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieThreeIoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
