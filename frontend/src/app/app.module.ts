import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OpenmapComponent } from './components/openmap/openmap.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandingComponent,
    AuthenticateComponent,
    WelcomeComponent,
    OpenmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
