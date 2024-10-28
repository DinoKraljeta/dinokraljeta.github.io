import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { OuterRimComponent } from './outer-rim/outer-rim.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'outer-rim', component: OuterRimComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
