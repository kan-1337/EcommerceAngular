import { Component, inject, signal } from '@angular/core';
import { CartItem } from '../../models/carts.model';
import { CartService } from '../../services/cart.service';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { CartItemComponent } from "./cart-item/cart-item.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  template: `
    <div class="">
      <h2 class="text-xl">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id)
      {
        <app-cart-item [item]="item"></app-cart-item>
        <div class="p-6 flex flex-col gap-4">
          <span class="text-xl">{{item.title}}</span>
        </div>
      }
    </div>
  `,
  styles: ``
})
export class CartComponent {
  cartItems = signal<CartItem[]>([]);
  cartService = inject(CartService);
  removeFromCart(item: CartItem) {
  }
}
