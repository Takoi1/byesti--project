import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './sigin/sigin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VendorComponent } from './vendor/vendor.component';
import { GuardroleGuard } from './guardrole.guard';
// import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
// import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
// import { ManageCommandsComponent } from './admin/manage-commands/manage-commands.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnhotorizedComponent } from './unhotorized/unhotorized.component';
import { CompanyComponent } from './company/company.component';
// import { DashboardAdminCo:mponent } from './admin/dashboard-admin/dashboard-admin.component';

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
    path:"user/:id",component:UserProfileComponent
  },
  {
    path:"vendor",component:VendorComponent,canActivate: [GuardroleGuard],data: { requiredRole: ['business'] } 
  },

  // {
  //   // path:"admin/product",component:ManageProductsComponent,canActivate: [GuardroleGuard],data: { requiredRole: ['admin'] } 
  // },
  // {
  //   // path:"admin/user",component:ManageUsersComponent,canActivate: [GuardroleGuard],data: { requiredRole: ['admin'] } 
  // },
  // {
  //   // path:"admin/commande",component:ManageCommandsComponent,canActivate: [GuardroleGuard],data: { requiredRole: ['admin'] } 
  // },
  {
    path:"auth",component:UnhotorizedComponent
  },
  {
    path:"company",component:CompanyComponent
  },

  {
    path:"**",component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forchild
  exports: [RouterModule]
})
export class AppRoutingModule { }
