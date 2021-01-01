import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingLayoutComponent } from './layouts/landing/landing-layout.component';
import { LandingRoutingModule } from './pages/landing/landing-routing.module';


const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', loadChildren:() => LandingRoutingModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
