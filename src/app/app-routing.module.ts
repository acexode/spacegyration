import { OccupantsComponent } from './admin/occupants/occupants.component';
import { AdminChangePasswordComponent } from './admin/admin-change-password/admin-change-password.component';
import { AdminBookedSpacesComponent } from './admin/admin-booked-spaces/admin-booked-spaces.component';
import { AdminBookedHistoryComponent } from './admin/admin-booked-history/admin-booked-history.component';
import { AdminAccountSettingsComponent } from './admin/admin-account-settings/admin-account-settings.component';
import { AddSpaceComponent } from './admin/add-space/add-space.component';
import { AvailableSpacesComponent } from './admin/available-spaces/available-spaces.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { BookedSpacesComponent } from './user/booked-spaces/booked-spaces.component';
import { BookedHistoryComponent } from './user/booked-history/booked-history.component';
import { AccountSettingComponent } from './user/account-setting/account-setting.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { SearchresultComponent } from './space/searchresult/searchresult.component';
import { BedSpaceComponent } from './space/bed-space/bed-space.component';
import { HomeComponent } from './space/home/home.component';
import { SpaceLandingComponent } from './space/space-landing/space-landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EventSpaceComponent } from './space/event-space/event-space.component';
import { OfficeSpaceComponent } from './space/office-space/office-space.component';
import { FunplacesComponent } from './space/funplaces/funplaces.component';
import { BookingComponent } from './space/booking/booking.component';
import { UserPageComponent } from './user/user-page/user-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'space',
    pathMatch: 'full'
  }, 
  {    
    path: 'user',  
    component: UserPageComponent,
    children : [
      {
         path: '',
         component: UserDashboardComponent
       },
      {
         path: 'user-dashboard',
         component: UserDashboardComponent
       },
      {
         path: 'account-setting',
         component: AccountSettingComponent
       },
      {
         path: 'booked-history',
         component: BookedHistoryComponent
       },
      {
         path: 'booked-spaces',
         component: BookedSpacesComponent
       },
      {
         path: 'change-password',
         component: ChangePasswordComponent
       },
      ]
  },
  {    
    path: 'admin',  
    component: AdminHomeComponent,
    children : [
      {
         path: '',
         component: AdminDashboardComponent
       },
      {
         path: 'admin-dashboard',
         component: AdminDashboardComponent
       },
      {
         path: 'available-spaces',
         component: AvailableSpacesComponent 
       },
      {
         path: 'occupants',
         component: OccupantsComponent
       },
      {
         path: 'add-space',
         component: AddSpaceComponent
       },
      {
         path: 'account-setting',
         component: AdminAccountSettingsComponent
       },
      {
         path: 'booked-history',
         component: AdminBookedHistoryComponent
       },
      {
         path: 'booked-spaces',
         component: AdminBookedSpacesComponent
       },
      {
         path: 'change-password',
         component: AdminChangePasswordComponent
       },
      ]
  },
  {
    path: 'space',
    component: HomeComponent,   
    children : [
      {
        path: '',
        component: SpaceLandingComponent,
        pathMatch: 'full'
      },
      {
         path: 'booking',
         component: BookingComponent
       },    
       {
         path: 'funplaces',
         children : [
           {
             path: 'restaurant',
             component: FunplacesComponent
           },
           {
             path: 'pub',
             component: FunplacesComponent
           },
           {
             path: 'bar',
             component: FunplacesComponent
           },
           {
             path: 'coffee',
             component: FunplacesComponent
           },
           {
             path: 'movies',
             component: FunplacesComponent
           },
           {
             path: 'concert',
             component: FunplacesComponent
           },
           {
             path: 'boat ride',
             component: FunplacesComponent
           },
           {
             path: 'library',
             component: FunplacesComponent
           },
           {
             path: 'receptions',
             component: FunplacesComponent
           },
           {
             path: 'club',
             component: FunplacesComponent
           },
           {
             path: 'table',
             component: FunplacesComponent
           },
           {
             path: 'meetups',
             component: FunplacesComponent
           },
           {
             path: 'bonfire',
             component: FunplacesComponent
           },
           {
             path: 'barbecue',
             component: FunplacesComponent
           },
           {
             path: 'stargazing',
             component: FunplacesComponent
           },
         ]
       },
       {
         path: 'office',
         children : [
           {
             path: 'private',
             component: OfficeSpaceComponent
           },
           {
             path: 'shared',
             component: OfficeSpaceComponent
           },
           {
             path: 'co-working',
             component: OfficeSpaceComponent
           },
           {
             path: 'open',
             component: OfficeSpaceComponent
           },
         ]
         // component: OfficeSpaceComponent
       },
       {
         path: 'search',
         component: SearchresultComponent
       },
       {
         path: 'bedspace',
         children: [
           {
             path: 'single bed',
             component: BedSpaceComponent
           },
           {
             path: 'double bed',
             component: BedSpaceComponent
           },
           {
             path: 'executive bedroom',
             component: BedSpaceComponent
           },
           {
             path: 'executive suite',
             component: BedSpaceComponent
           },
           {
             path: 'luxury suite',
             component: BedSpaceComponent
           },
           {
             path: 'apartment',
             component: BedSpaceComponent
           },
         ]
       },
       {
         path: 'events',
         children : [
           {
             path: 'picnics',
             component: EventSpaceComponent
           },
           {
             path: 'meeting',
             component: EventSpaceComponent
           },
           {
             path: 'trainings',
             component: EventSpaceComponent
           },
           {
             path: 'private meeting',
             component: EventSpaceComponent
           },
           {
             path: 'board meeting',
             component: EventSpaceComponent
           },
           {
             path: 'group meeting',
             component: EventSpaceComponent
           },
           {
             path: 'reception',
             component: EventSpaceComponent
           },
           {
             path: 'conference',
             component: EventSpaceComponent
           },
           {
             path: 'seminars',
             component: EventSpaceComponent
           },
           {
             path: 'birthdays',
             component: EventSpaceComponent
           },
           {
             path: 'political gathering',
             component: EventSpaceComponent
           },
           {
             path: 'social',
             component: EventSpaceComponent
           },
           {
             path: 'weddings',
             component: EventSpaceComponent
           },
           {
             path: 'parties',
             component: EventSpaceComponent
           },
           {
             path: 'meetups',
             component: EventSpaceComponent
           },
           {
             path: 'lectures',
             component: EventSpaceComponent
           },
         ]
       }
 
   ]
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
