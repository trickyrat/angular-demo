import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent {
  productCount: number = 0;
  hidden: boolean = false;

  constructor(private cartService: CartService) {
    this.cartService.countObserver.subscribe((count) => this.productCount = count);
  }


}
