import { Component } from '@angular/core';

import { Product, AuxNavItem, Service } from './header.service';

@Component({
    selector: 'ah-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css',],
    providers: [Service]
})
export class HeaderComponent {
    products: Product[];
    auxNavItems: AuxNavItem[];

    showSubmenuModes: any;
    showFirstSubmenuModes: any;
    currentProduct: Product;
    currentAuxNavItem: AuxNavItem;

    constructor(service: Service) {
        this.products = service.getProducts();
        this.auxNavItems = service.getAuxNavItems();

        this.showSubmenuModes = [{
            name: "onHover",
            delay: { show: 0, hide: 500 }
        }, {
            name: "onClick",
            delay: { show: 0, hide: 300 }
        }];
        this.showFirstSubmenuModes = this.showSubmenuModes[1];
    }
    itemClick(data) {
        let item = data.itemData;

        if(item.price) {
            this.currentProduct = item;
        }

        
    }
}