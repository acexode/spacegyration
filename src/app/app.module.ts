import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
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
import { BookingComponent } from './space/booking/booking.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

import { UserPageComponent } from './user/user-page/user-page.component';
import { UserNavComponent } from './user/user-nav/user-nav.component';
import { BookedSpacesComponent } from './user/booked-spaces/booked-spaces.component';
import { BookedHistoryComponent } from './user/booked-history/booked-history.component';
import { AccountSettingComponent } from './user/account-setting/account-setting.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { OccupantsComponent } from './admin/occupants/occupants.component';
import { AddSpaceComponent } from './admin/add-space/add-space.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AvailableSpacesComponent } from './admin/available-spaces/available-spaces.component';
import { AdminBookedHistoryComponent } from './admin/admin-booked-history/admin-booked-history.component';
import { AdminBookedSpacesComponent } from './admin/admin-booked-spaces/admin-booked-spaces.component';
import { AdminAccountSettingsComponent } from './admin/admin-account-settings/admin-account-settings.component';
import { AdminChangePasswordComponent } from './admin/admin-change-password/admin-change-password.component';
import { SuperAdminComponent } from './admin/super-admin/super-admin.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Ng5SliderModule } from 'ng5-slider';
import { SpaceTitleComponent } from './space/space-title/space-title.component';
import { SpaceCardsComponent } from './space/space-cards/space-cards.component';

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
    BookingComponent,
    UserDashboardComponent,    
    UserPageComponent, 
    UserNavComponent, 
    BookedSpacesComponent, 
    BookedHistoryComponent, 
    AccountSettingComponent, 
    ChangePasswordComponent,
    AdminHomeComponent, 
    AdminDashboardComponent,
    AvailableSpacesComponent, 
    OccupantsComponent, 
    AddSpaceComponent,     
    AdminNavComponent, 
    AdminBookedHistoryComponent,
     AdminBookedSpacesComponent, 
     AdminAccountSettingsComponent, 
     AdminChangePasswordComponent, SpaceTitleComponent, SpaceCardsComponent, SuperAdminComponent,     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,  
    FlashMessagesModule.forRoot(),  
    HttpClientModule,
    Ng2FlatpickrModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxDropzoneModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
