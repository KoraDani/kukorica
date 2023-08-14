import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationGuard} from "./authentication.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule), canActivate: [AuthenticationGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'userdata',
    loadChildren: () => import('./pages/userdata/userdata.module').then(m => m.UserdataModule), canActivate: [AuthenticationGuard]
  },
  {
    path: 'address',
    loadChildren: () => import('./pages/order/address/address.module').then(m => m.AddressModule), canActivate: [AuthenticationGuard]
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./pages/shop/view/view.module').then(m => m.ViewModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/shop/add/add.module').then(m => m.AddModule), canActivate: [AuthenticationGuard]
  },
  {
    path: '', redirectTo: '/main', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
