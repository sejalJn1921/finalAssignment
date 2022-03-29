import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  constructor(public router: Router) {}
  onHome(){
    this.router.navigate(['/home'])
  }
 

  productList: any = [
    {
      title: 'Shoes',
      price: '$35.5',
      rating: 4,
      description: 'just wear it',
      category: ['footwear', 'fashion', 'style', 'fuckIt'],
      quantity: 1,
      images: [
        'https://rukminim2.flixcart.com/image/416/416/kekadu80/mobile/y/9/m/realme-7-rmx2151-original-imafv73g5kwrbqrp.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/416/416/kqgyhe80/computer/d/l/f/g15-5510-notebook-dell-original-imag4gy96ahhtmvz.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/416/416/kqgyhe80/computer/d/l/f/g15-5510-notebook-dell-original-imag4gy96ahhtmvz.jpeg?q=70',
      ],
      url: 'urlToProduct',
      discount: 30,
    },
    
  ];

  ngOnInit(): void {}
  
}
