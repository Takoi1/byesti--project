import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './sigin/sigin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [

  {
    path:"signin",component:SiginComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:"card",component:CardComponent
  },
  {
    path:"user",component:UserProfileComponent
  },
  {
    path:"vendor",component:VendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forchild
  exports: [RouterModule]
})
export class AppRoutingModule { }
