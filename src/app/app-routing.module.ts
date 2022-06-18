import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoplanetsComponent } from './components/exoplanets/exoplanets.component'


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'exoplanets',
    component: ExoplanetsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
