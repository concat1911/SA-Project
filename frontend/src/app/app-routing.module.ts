import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'authenticate', component: AuthenticateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
