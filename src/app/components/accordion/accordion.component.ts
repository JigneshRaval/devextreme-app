import { Component } from '@angular/core';

import { Company, Service } from '../tabs/tabs.service';

@Component({
    selector: 'ah-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css'],
    providers: [Service]
})
export class AhAccordionComponent {
    companies: Company[];

    constructor(service: Service) {
        this.companies = service.getCompanies();
    }
}
