import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuildeer.group({
    name: "",
    address: ""
  })


  constructor(private cartService: CartService,
    private formBuildeer: FormBuilder) {

  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  removeItem(id: number) {
    console.log(this.items);
    this.items.splice(this.items.findIndex(x => x.id === id), 1);
    this.cartService.countObserver.next(this.items.length);
  }


}
