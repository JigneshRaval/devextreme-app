import { Component, } from '@angular/core';

import { Employee, Service } from '../../app.service';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'tile-component',
    templateUrl: './tiles.component.html',
    styleUrls: ['./tiles.component.css'],
    providers: [Service]
})
export class TileComponent {
    applyButtonOptions: { text: string; type: string; onClick: (e: any, employee: any) => void; };
    currentEmployee = new Employee();
    employees: Employee[];
    popupVisible = false;

    constructor(service: Service) {
        this.employees = service.getEmployees();
        
        this.applyButtonOptions = {
            text: "Apply",
            type: "success",
            onClick: (e, employee) => {
                notify("The Apply button was clicked");
                this.currentEmployee = employee;
                this.popupVisible = true;
            }
        }
    }


    showInfo(employee) {

    }
}