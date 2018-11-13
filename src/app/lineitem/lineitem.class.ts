import { Prchrequest } from "../prchrequest/prchrequest.class";
import { Product } from "../product/product.class";

export class LineItem {
    id: number;
    prchRequest: Prchrequest;
    product: Product;
    quantity: number;

    constructor() {
        this.id = 0;
        this.quantity= 0;
    }
}