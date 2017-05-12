import { Injectable } from '@angular/core';

// Example 1 : Standard Bar Chart Data
//============================================
export class ChartData {
    day: string;
    oranges: number;
}

let data: ChartData[] = [{
    day: "Monday",
    oranges: 3
}, {
    day: "Tuesday",
    oranges: 2
}, {
    day: "Wednesday",
    oranges: 3
}, {
    day: "Thursday",
    oranges: 4
}, {
    day: "Friday",
    oranges: 6
}, {
    day: "Saturday",
    oranges: 11
}, {
    day: "Sunday",
    oranges: 4
}];

// Example 2 : Side-by-Side Bar Chart Data
//============================================
export class GrossProduct {
    state: string;
    year1998: number;
    year2001: number;
    year2004: number;
}

let grossProductData: GrossProduct[] = [{
    state: "Illinois",
    year1998: 423.721,
    year2001: 476.851,
    year2004: 528.904
}, {
    state: "Indiana",
    year1998: 178.719,
    year2001: 195.769,
    year2004: 227.271
}, {
    state: "Michigan",
    year1998: 308.845,
    year2001: 335.793,
    year2004: 372.576
}, {
    state: "Ohio",
    year1998: 348.555,
    year2001: 374.771,
    year2004: 418.258
}, {
    state: "Wisconsin",
    year1998: 160.274,
    year2001: 182.373,
    year2004: 211.727
}];

// Example 3 : Pie with Custom Labels Data
//============================================
export class MedalsInfo {
    country: string;
    medals: number;
}

let medals: MedalsInfo[] = [{
    country: "USA",
    medals: 110
}, {
    country: "China",
    medals: 100
}, {
    country: "Russia",
    medals: 72
}, {
    country: "Britain",
    medals: 47
}, {
    country: "Australia",
    medals: 46
}, {
    country: "Germany",
    medals: 41
}, {
    country: "France",
    medals: 40
}, {
    country: "South Korea",
    medals: 31
}];

// Export All Services
//===============================
@Injectable()
export class Service {
    getData(): ChartData[] {
        return data;
    }

    getGrossProductData(): GrossProduct[] {
        return grossProductData;
    }

    getMedalsData(): MedalsInfo[] {
        return medals;
    }
}