import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { SiginComponent } from './sigin/sigin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { VendorComponent } from './vendor/vendor.component';
<<<<<<< HEAD
import { GuardroleGuard } from './guardrole.guard';
// import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
// import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
// import { ManageCommandsComponent } from './admin/manage-commands/manage-commands.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnhotorizedComponent } from './unhotorized/unhotorized.component';
import { CompanyComponent } from './company/company.component';
// import { DashboardAdminCo:mponent } from './admin/dashboard-admin/dashboard-admin.component';
=======
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { NotFoundError } from 'rxjs';
>>>>>>> 3d113f3ceca4c0f7f0f3edfb40f75f361d5f85e7

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
<<<<<<< HEAD
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
=======
    path:"vendor",component:VendorComponent
  },
  {
    path:"detailProduct/:id",component:DetailProductComponent
>>>>>>> 3d113f3ceca4c0f7f0f3edfb40f75f361d5f85e7
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forchild
  exports: [RouterModule]
})
export class AppRoutingModule { }
