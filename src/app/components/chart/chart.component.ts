import { Component } from '@angular/core';
import { ChartData, GrossProduct, MedalsInfo, Service } from './chart.service';

@Component({
    selector: 'chart-component',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
    providers: [Service]
})
export class ChartComponent {
    // 1. Standard Bar Chart Data
    dataSource: ChartData[];

    // 2. Side-by-Side Bar Chart Data
    grossProductData: GrossProduct[];

    // 3. Pie with Custom Labels
    olympicMedals: MedalsInfo[];

    constructor(service: Service) {
        // 1. Standard Bar Chart Data
        this.dataSource = service.getData();

        // 2. Side-by-Side Bar Chart Data
        this.grossProductData = service.getGrossProductData();

        // 3. Pie with Custom Labels
        this.olympicMedals = service.getMedalsData();
    }
    
    // 2. Side-by-Side Bar Chart Data
    onPointClick(e) {
        e.target.select();
    }

    // 3. Pie with Custom Labels
    customizeLabel(arg) {
        return arg.valueText + " (" + arg.percentText + ")";
    }
}