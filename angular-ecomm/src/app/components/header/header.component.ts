import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl">My Store</span>
      <app-primary-button [label]="cart()" (btnClicked)="cartClicked()"></app-primary-button>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
  cart = signal('Cart');
  cartClicked() {
    console.log("cart clicked");
  }
}

