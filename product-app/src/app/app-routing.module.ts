import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserComponent } from './user/user.component';
import {  AuthGuard } from './auth.guard';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { UploadComponent } from './upload/upload.component';
import { AdminHomeModule } from './admin-home/admin-home/admin-home.module';
import { ProductDetailsComponent } from './details/product-details/product-details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { 
    path : '', 
    redirectTo: 'login', 
    pathMatch : 'full'
  },
  {
    component : HomeComponent,
    path : 'home'
  },//main-home
  {
    component : AdminAuthComponent,
    path : 'admin-auth'
  },//admin-regi
  {
    component : LoginComponent,
    path : 'login'
  },//login
  {
    component : RegisterComponent,
    path : 'admin-user',
    canActivate : [AuthGuard]
  },//adding user after adminaccess
  // {
  //   component : AdminHomeComponent,
  //   path : 'admin-home'
  // },//main for user
  {
    path : 'admin-home',
    loadChildren : () => import('./admin-home/admin-home/admin-home.module').then((adm) => adm.AdminHomeModule),
    canActivate : [AuthGuard]
  },
  {
    component : UserComponent,
    path : 'admin-edit-user/:id',
    canActivate : [AuthGuard]
  },//update user
  {
    component : ProductComponent,
    path : 'user-product',
    canActivate : [AuthGuard]
  },
  {
    component : AddProductComponent,
    path : 'user-addproduct'
  },
  {
    component : ProductDetailsComponent,
    path : 'user-view-product/:id'
  },
  {
    component : UpdateProductComponent,
    path : 'user-edit-product/:id'
  },
  {
    component : UploadComponent,
    path : 'user-upload'
  },
  { 
    component : ErrorComponent,
    path : '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
