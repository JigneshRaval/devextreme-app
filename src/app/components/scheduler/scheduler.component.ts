import {NgModule, Component} from '@angular/core';
import {Appointment, Resource, Service} from './scheduler.service';

@Component({
    selector: 'scheduler-component',
    templateUrl: './scheduler.component.html',
    styleUrls: ['./scheduler.component.css'],
    providers: [Service]
})
export class SchedulerComponent {
    appointmentsData: Appointment[];
    currentDate: Date = new Date(2015, 4, 25);
    resourcesData: Resource[];
    switchModeNames: string[];

    constructor(service: Service) {
        this.switchModeNames = ["Tabs", "Drop-Down Menu"];

        this.appointmentsData = service.getAppointments();
        this.resourcesData = service.getResources();
    }
}