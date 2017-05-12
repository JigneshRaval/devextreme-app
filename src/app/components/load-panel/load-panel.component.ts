import { Component } from '@angular/core';

import { Employee2, Service } from './load-panel.service';

@Component({
    selector: 'load-panel-component',
    providers: [ Service ],
    templateUrl: './load-panel.component.html',
    styleUrls: ['./load-panel.component.css']
})

export class LoadPanelComponent {
    employee: Employee2;
    employeeInfo: any = {};
    loadingVisible = false;

    constructor(service: Service) {
        this.employee = service.getEmployee();
    }

    onShown() {
        setTimeout(() => {
            this.loadingVisible = false;
        }, 3000);
    }

    onHidden() {
        this.employeeInfo = this.employee;
    }

    showLoadPanel() {
        this.employeeInfo = {};
        this.loadingVisible = true;
    }
}