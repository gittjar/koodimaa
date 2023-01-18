import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiesComponent } from './studies/studies.component';
import { MeComponent } from './me/me.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { JobsComponent } from './jobs/jobs.component';
import { EtusivuComponent } from './etusivu/etusivu.component';

// Reitit tulevat routes -taulukkoon joka on tyypilt��n Routes. Tietotyyppi kertoo ett� taulukkoon tulee Routes -tyyppisi� olioita.

const routes: Routes = [
  {path: 'me', component: MeComponent},
  {path: 'studies', component: StudiesComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'etusivu', component: EtusivuComponent},
  {path: '', redirectTo: '/etusivu', pathMatch: 'full'},  // redirect to etusivu

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
