import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeComponent } from './me/me.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

// Reitit tulevat routes -taulukkoon joka on tyypilt��n Routes. Tietotyyppi kertoo ett� taulukkoon tulee Routes -tyyppisi� olioita.

const routes: Routes = [
  {path: 'pricelist', component: MeComponent},
  {path: 'etusivu', component: EtusivuComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'tietosuoja', component: PrivacyComponent},
  {path: '', redirectTo: '/etusivu', pathMatch: 'full'},  // redirect to etusivu

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
