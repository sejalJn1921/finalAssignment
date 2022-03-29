import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { MatMenuModule } from '@angular/material/menu';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { SearchPipe } from '../search.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    CartComponent,
    WishlistComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatMenuModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    NgbModule
  ],
})
export class DashboardModule {}
