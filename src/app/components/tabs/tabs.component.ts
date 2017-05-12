import { Component } from '@angular/core';

import { Company, Service } from './tabs.service';

@Component({
    selector: 'ah-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
    providers: [Service]
})
export class TabsComponent {
    companies: Company[];
    itemCount: number;

    constructor(service: Service) {
        this.companies = service.getCompanies();
        this.itemCount = this.companies.length;
    }
}