import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import {ProductsListComponent} from "./components/products-list/prooducts-list.component";
import {HomePageGuard} from "./shared/services/home-page.guard";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent,
    canActivate: [HomePageGuard],
    canDeactivate: [HomePageGuard],
    children: [
      {path: 'price', component: ProductsListComponent},
      {path: 'history', component: PurchaseHistoryComponent},
      {path: '', redirectTo: 'price', pathMatch: "full"},
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [HomePageGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
