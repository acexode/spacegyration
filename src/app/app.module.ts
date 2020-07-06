import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './space/home/home.component';
import { SpaceNavComponent } from './space/space-nav/space-nav.component';
import { SpaceFooterComponent } from './space/space-footer/space-footer.component';
import { SpaceLandingComponent } from './space/space-landing/space-landing.component';
import { SignupLoginComponent } from './auth/signup-login/signup-login.component';
import { BedSpaceComponent } from './space/bed-space/bed-space.component';
import { ConferenceSpaceComponent } from './space/conference-space/conference-space.component';
import { EventSpaceComponent } from './space/event-space/event-space.component';
import { OfficeSpaceComponent } from './space/office-space/office-space.component';
import { FunplacesComponent } from './space/funplaces/funplaces.component';
import { SearchresultComponent } from './space/searchresult/searchresult.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpaceNavComponent,
    SpaceFooterComponent,
    SpaceLandingComponent,
    SignupLoginComponent,
    BedSpaceComponent,
    ConferenceSpaceComponent,
    EventSpaceComponent,
    OfficeSpaceComponent,
    FunplacesComponent,
    SearchresultComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
