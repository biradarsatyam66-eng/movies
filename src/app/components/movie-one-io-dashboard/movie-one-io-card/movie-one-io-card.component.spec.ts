import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieOneIoCardComponent } from './movie-one-io-card.component';

describe('MovieOneIoCardComponent', () => {
  let component: MovieOneIoCardComponent;
  let fixture: ComponentFixture<MovieOneIoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieOneIoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieOneIoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
