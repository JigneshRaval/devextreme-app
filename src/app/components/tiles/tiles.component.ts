import { Component, } from '@angular/core';

import { Employee, Service } from '../../app.service';

@Component({
    selector: 'tile-component',
    templateUrl: './tiles.component.html',
    styleUrls: ['./tiles.component.css'],
    providers: [Service]
})
export class TileComponent {
    currentEmployee = {};
    employees: Employee[];
    popupVisible = false;

    constructor(service: Service) {
        this.employees = service.getEmployees();
    }

    showInfo(employee) {
        this.currentEmployee = employee;
        this.popupVisible = true;
    }
}