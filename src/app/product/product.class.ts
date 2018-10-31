export class Product {
    id: number;

    vendor: string;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;

    constructor() {
        this.id = 0;
    }

}

	// @ManyToOne
	// @JoinColumn(name = "vendorID")
	// private Vendor vendor;
	