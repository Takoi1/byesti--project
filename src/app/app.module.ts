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
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
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
    UpdateProductComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
