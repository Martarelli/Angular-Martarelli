import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiGithubService } from 'src/app/shared/services/api-github.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let githubService: ApiGithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports : [HttpClientModule],
      providers : [ApiGithubService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    githubService = TestBed.inject(ApiGithubService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should get name from github',() => {
    let name = githubService.getProfile;
  })
});
