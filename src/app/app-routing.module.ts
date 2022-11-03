import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '',redirectTo: 'products',pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
