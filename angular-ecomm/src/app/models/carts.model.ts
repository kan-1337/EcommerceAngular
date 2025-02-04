import { Product } from "./products.model";

export interface CartItem {
    id: number;
    product: Product;
    quantity: number;
}