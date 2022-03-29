import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { WishlistComponent } from './dashboard/wishlist/wishlist.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'categories',component:CategoriesComponent
  },
  
  {
    path:'cart',component:CartComponent
  },
  {
    path:'wishlist',component:WishlistComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
