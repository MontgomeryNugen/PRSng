import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { SortUsersPipe } from './pipes/sort-users.pipe';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { PrchrequestCreateComponent } from './prchrequest/prchrequest-create/prchrequest-create.component';
import { PrchrequestDetailComponent } from './prchrequest/prchrequest-detail/prchrequest-detail.component';
import { PrchrequestEditComponent } from './prchrequest/prchrequest-edit/prchrequest-edit.component';
import { PrchrequestListComponent } from './prchrequest/prchrequest-list/prchrequest-list.component';
import { PrchrequestLinesComponent } from './prchrequest/prchrequest-lines/prchrequest-lines.component';
import { PrchrequestReviewDetailComponent } from './prchrequest/prchrequest-review-detail/prchrequest-review-detail.component';
import { PrchrequestReviewListComponent } from './prchrequest/prchrequest-review-list/prchrequest-review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent,
    BoolDisplayPipe,
    SortUsersPipe,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    PrchrequestCreateComponent,
    PrchrequestDetailComponent,
    PrchrequestEditComponent,
    PrchrequestListComponent,
    PrchrequestLinesComponent,
    PrchrequestReviewDetailComponent,
    PrchrequestReviewListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
