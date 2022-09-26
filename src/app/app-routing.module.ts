import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PriceListComponent } from './price-list/price-list.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent}, 
  {path: 'home', component: HomePageComponent, children: [
    {path: 'price', component: PriceListComponent},
    {path: 'history', component: PurchaseHistoryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
