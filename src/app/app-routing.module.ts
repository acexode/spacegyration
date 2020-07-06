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

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'space',
    pathMatch: 'full'
  },
  {
    path: 'space',
    component: HomeComponent,
    // children : [
    //   {
    //      path: '',
    //      component: SpaceLandingComponent,
    //      pathMatch: 'full'
    //    },
    //   {
    //      path: 'bedspace',
    //      children: [
    //       {
    //         path: 'single bed',
    //         component: BedSpaceComponent
    //       },
    //     ]
    //    },
    //   ]
    children : [
      // {
      //    path: 'booking',
      //    component: BookingComponent
      //  },
      //  {
      //    path: 'dashboard',
      //    component: DashboardComponent
      //  },
       {
         path: '',
         component: SpaceLandingComponent,
         pathMatch: 'full'
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
