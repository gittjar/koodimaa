import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudiesComponent } from './studies/studies.component';
import { MeComponent } from './me/me.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

// Reitit tulevat routes -taulukkoon joka on tyypilt‰‰n Routes. Tietotyyppi kertoo ett‰ taulukkoon tulee Routes -tyyppisi‰ olioita.

const routes: Routes = [
  {path: 'me', component: MeComponent},
  {path: 'studies', component: StudiesComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: '', redirectTo: '/me', pathMatch: 'full'},  // redirect to me

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
