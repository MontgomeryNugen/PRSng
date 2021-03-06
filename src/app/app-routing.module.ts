import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineItemListComponent } from './lineItem/lineitem-list/lineitem-list.component';
import { LineItemDetailComponent } from './lineItem/lineitem-detail/lineitem-detail.component';
import { LineItemEditComponent } from './lineItem/lineitem-edit/lineitem-edit.component';
import { LineItemCreateComponent } from './lineItem/lineitem-create/lineitem-create.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { PrchrequestListComponent } from './prchrequest/prchrequest-list/prchrequest-list.component';
import { PrchrequestDetailComponent } from './prchrequest/prchrequest-detail/prchrequest-detail.component';
import { PrchrequestCreateComponent } from './prchrequest/prchrequest-create/prchrequest-create.component';
import { PrchrequestEditComponent } from './prchrequest/prchrequest-edit/prchrequest-edit.component';
import { PrchrequestLinesComponent } from './prchrequest/prchrequest-lines/prchrequest-lines.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},

  { path: 'lineitems/list/:id', component: LineItemListComponent},
  { path: 'lineitems/create/:id', component: LineItemCreateComponent},
  { path: 'lineitems/detail/:id', component: LineItemDetailComponent},
  { path: 'lineitems/edit/:id', component: LineItemEditComponent},
  
  { path: 'prchrequest/list', component: PrchrequestListComponent },
  { path: 'prchrequest/create', component: PrchrequestCreateComponent },
  { path: 'prchrequest/detail/:id', component: PrchrequestDetailComponent },
  { path: 'prchrequest/edit/:id', component: PrchrequestEditComponent },
  { path: 'prchrequest/lines/:id', component: PrchrequestLinesComponent },

  { path: 'products/list', component: ProductListComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/detail/:id', component: ProductDetailComponent },
  { path: 'products/edit/:id', component: ProductEditComponent },

  { path: 'users/list', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  // { path: 'users/login', component: UserLoginComponent},

  { path: 'vendors/list', component: VendorListComponent },
  { path: 'vendors/create', component: VendorCreateComponent },
  { path: 'vendors/detail/:id', component: VendorDetailComponent },
  { path: 'vendors/edit/:id', component: VendorEditComponent },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
