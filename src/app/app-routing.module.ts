import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"feedback",
    component:FeedbackComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
