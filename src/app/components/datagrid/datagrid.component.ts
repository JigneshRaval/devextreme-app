import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Service, Employee, State } from '../../app.service';

@Component({
    selector: 'data-grid',
    templateUrl: './datagrid.component.html',
    styleUrls: ['./datagrid.component.css'],
    providers: [Service]
})
export class DataGridComponent {
    dataSource: Employee[];
    states: State[];
    events = "";

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
    }
    
    logEvent(eventName) {
        this.events = this.events + (this.events && ", ") + eventName;

        notify(eventName + " Event Fired", "success", 600);
    }
  
    clearEvents() {
        this.events = "";
    }
}