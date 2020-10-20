import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import { SuperAdminGuard } from './super-admin.guard';
import { AdminGuard } from './admin.guard';
import { UserGuard } from './user.guard';
import { BannerSettingsComponent } from './admin/banner-settings/banner-settings.component';
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
import { BookingComponent } from './space/booking/booking.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'space',
    pathMatch: 'full'
  }, 
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    
  }, 
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    
  }, 
  {    
    path: 'user',  
    component: UserPageComponent,
    canActivate: [UserGuard],    
    children : [
      {
         path: '',         
         redirectTo: 'user-dashboard',
         pathMatch: 'full'
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
    canActivate: [AdminGuard],
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
    path: 'super-admin',  
    component: AdminHomeComponent,
    canActivate: [SuperAdminGuard],
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
         path: 'banner-setting',
         component: BannerSettingsComponent
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
             component: BedSpaceComponent
           },
           {
             path: 'pub',
             component: BedSpaceComponent
           },
           {
             path: 'bar',
             component: BedSpaceComponent
           },
           {
             path: 'coffee',
             component: BedSpaceComponent
           },
           {
             path: 'movies',
             component: BedSpaceComponent
           },
           {
             path: 'concert',
             component: BedSpaceComponent
           },
           {
             path: 'boat ride',
             component: BedSpaceComponent
           },
           {
             path: 'library',
             component: BedSpaceComponent
           },
           {
             path: 'receptions',
             component: BedSpaceComponent
           },
           {
             path: 'club',
             component: BedSpaceComponent
           },
           {
             path: 'table',
             component: BedSpaceComponent
           },
           {
             path: 'meetups',
             component: BedSpaceComponent
           },
           {
             path: 'bonfire',
             component: BedSpaceComponent
           },
           {
             path: 'barbecue',
             component: BedSpaceComponent
           },
           {
             path: 'stargazing',
             component: BedSpaceComponent
           },
         ]
       },
       {
         path: 'office',
         children : [
           {
             path: 'private',
             component: BedSpaceComponent
           },
           {
             path: 'shared',
             component: BedSpaceComponent
           },
           {
             path: 'co-working',
             component: BedSpaceComponent
           },
           {
             path: 'open',
             component: BedSpaceComponent
           },
         ]
         // component: BedSpaceComponent
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
             component: BedSpaceComponent
           },
           {
             path: 'meeting',
             component: BedSpaceComponent
           },
           {
             path: 'trainings',
             component: BedSpaceComponent
           },
           {
             path: 'private meeting',
             component: BedSpaceComponent
           },
           {
             path: 'board meeting',
             component: BedSpaceComponent
           },
           {
             path: 'group meeting',
             component: BedSpaceComponent
           },
           {
             path: 'reception',
             component: BedSpaceComponent
           },
           {
             path: 'conference',
             component: BedSpaceComponent
           },
           {
             path: 'seminars',
             component: BedSpaceComponent
           },
           {
             path: 'birthdays',
             component: BedSpaceComponent
           },
           {
             path: 'political gathering',
             component: BedSpaceComponent
           },
           {
             path: 'social',
             component: BedSpaceComponent
           },
           {
             path: 'weddings',
             component: BedSpaceComponent
           },
           {
             path: 'parties',
             component: BedSpaceComponent
           },
           {
             path: 'meetups',
             component: BedSpaceComponent
           },
           {
             path: 'lectures',
             component: BedSpaceComponent
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
