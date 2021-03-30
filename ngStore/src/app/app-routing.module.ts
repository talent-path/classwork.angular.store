import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ShopComponent } from './components/pages/shop/shop.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'shop', component: ShopComponent },
{ path: 'checkout', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
