import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieThreeIoCardComponent } from './movie-three-io-card.component';

describe('MovieThreeIoCardComponent', () => {
  let component: MovieThreeIoCardComponent;
  let fixture: ComponentFixture<MovieThreeIoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieThreeIoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieThreeIoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
