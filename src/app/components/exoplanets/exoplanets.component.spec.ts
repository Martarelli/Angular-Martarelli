import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiNasaExoplanetsService } from 'src/app/shared/services/api-nasa-exoplanets.service';

import { ExoplanetsComponent } from './exoplanets.component';

describe('ExoplanetsComponent', () => {
  let component: ExoplanetsComponent;
  let fixture: ComponentFixture<ExoplanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoplanetsComponent ],
      imports : [HttpClientModule],
      providers : [ApiNasaExoplanetsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
