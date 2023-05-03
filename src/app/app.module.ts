import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SiginComponent } from './sigin/sigin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AccounttypeComponent } from './accounttype/accounttype.component';
import { CardComponent } from './card/card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { VendorComponent } from './vendor/vendor.component';
import { ProductComponent } from './product/product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
<<<<<<< HEAD
import {NgxImageCompressService} from 'ngx-image-compress';
import { CookieService } from 'ngx-cookie-service';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
// import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { ManageCommandsComponent } from './admin/manage-commands/manage-commands.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnhotorizedComponent } from './unhotorized/unhotorized.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyComponent } from './company/company.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';

=======
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
>>>>>>> 3d113f3ceca4c0f7f0f3edfb40f75f361d5f85e7
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SiginComponent,
    NavbarComponent,
    HomeComponent,
    AccounttypeComponent,
    CardComponent,
    UserProfileComponent,
    VendorComponent,
    ProductComponent,
<<<<<<< HEAD
    ManageProductsComponent,
    // ManageUsersComponent,
    ManageCommandsComponent,
    NotFoundComponent,
    UnhotorizedComponent,
    FooterComponent,
    CompanyComponent,
    // DashboardAdminComponent
=======
    UpdateProductComponent,
    DetailProductComponent
>>>>>>> 3d113f3ceca4c0f7f0f3edfb40f75f361d5f85e7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
<<<<<<< HEAD
  providers: [NgxImageCompressService,CookieService],
=======
  providers: [],
>>>>>>> 3d113f3ceca4c0f7f0f3edfb40f75f361d5f85e7
  bootstrap: [AppComponent]
})
export class AppModule { }
