import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiGithubService } from 'src/app/shared/services/api-github.service';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let githubService: ApiGithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      imports : [HttpClientModule],
      providers : [ApiGithubService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    githubService = TestBed.inject(ApiGithubService);

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resquest project one', () => {
    let projectOne = githubService.getProjectOne;
    expect(projectOne).toBeTruthy();
  });

  it('should resquest project two', () => {
    let projectOne = githubService.getProjectTwo;
    expect(projectOne).toBeTruthy();
  });

  it('should resquest project three', () => {
    let projectOne = githubService.getProjectThree;
    expect(projectOne).toBeTruthy();
  });

  it('should resquest project for', () => {
    let projectOne = githubService.getProjectFour;
    expect(projectOne).toBeTruthy();
  });
});
