import { Injectable } from '@angular/core';

export class Product {
    id: string;
    name: string;
    iconSrc?: string;
    price?: number;
    disabled?: boolean;
    items?: Product[];
}

export class AuxNavItem {
    id: string;
    name: string;
    iconSrc?: string;
    price?: number;
    disabled?: boolean;
    items?: AuxNavItem[];
}

var products: Product[] = [{
    id: "1",
    name: "Role",
    items: [{
        id: "1_1",
        name: "Sub Nav Item 1"
    }, {
        id: "1_2",
        name: "Sub Nav Item 2"
    }]
}];

var auxNavItems: AuxNavItem[] = [{
    id: "1",
    name: "Your Profile",
    items: [{
        id: "1_1",
        name: "Sub Nav Item 1"
    }, {
        id: "1_2",
        name: "Sub Nav Item 2"
    }]
}, {
    id: "2",
    name: "Chat"
}, {
    id: "3",
    name: "Contact"
}, {
    id: "4",
    name: "Logoff"
}];

@Injectable()
export class Service {
    getProducts(): Product[] {
        return products;
    }

    getAuxNavItems(): AuxNavItem[] {
        return auxNavItems;
    }
}
