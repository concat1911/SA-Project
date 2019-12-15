import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'authenticate', component: AuthenticateComponent},
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
