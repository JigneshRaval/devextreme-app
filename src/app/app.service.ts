import { Injectable } from '@angular/core';

export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    Picture: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
}

let employees: Employee[] = [{
    "ID": 1,
    "FirstName": "Sandra",
    "LastName": "Johnson",
    "Prefix": "Mrs.",
    "Position": "Controller",
    "Picture": "../assets/images/images.jpg",
    "BirthDate": "1974/11/15",
    "HireDate": "2005/05/11",
    "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    "Address": "4600 N Virginia Rd."
}, {
    "ID": 2,
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Prefix": "Mr.",
    "Position": "Shipping Manager",
    "Picture": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUVP5kZhAZlQjU3sttmDwG9kygpSamrmluYyWDXosUMd0vVMSJ",
    "BirthDate": "1978/01/09",
    "HireDate": "2009/08/11",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
    "Address": "424 N Main St."
}, {
    "ID": 3,
    "FirstName": "Cynthia",
    "LastName": "Stanwick",
    "Prefix": "Ms.",
    "Position": "HR Assistant",
    "Picture": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOZLMNxAEXQ3q9OQDnTUjeRiKbsa3VNYd07z-_CRH4y3ezGEIO",
    "BirthDate": "1985/06/05",
    "HireDate": "2008/03/24",
    "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    "Address": "2211 Bonita Dr."
}, {
    "ID": 4,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "Picture": "./assets/images/favorite_flowers_in_august_by_daykiney-d7ye5wc.jpg",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
    "Address": "12100 Mora Dr"
}, {
    "ID": 5,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "Picture": "./assets/images/download (1).jpg",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    "Address": "12100 Mora Dr"
}, {
    "ID": 6,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "Picture": "./assets/images/midas_touch_by_arefin03-dat344m.jpg",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
    "Address": "12100 Mora Dr"
},{
    "ID": 7,
    "FirstName": "Sandra",
    "LastName": "Johnson",
    "Prefix": "Mrs.",
    "Position": "Controller",
    "Picture": "../assets/images/images.jpg",
    "BirthDate": "1974/11/15",
    "HireDate": "2005/05/11",
    "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    "Address": "4600 N Virginia Rd."
}, {
    "ID": 8,
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Prefix": "Mr.",
    "Position": "Shipping Manager",
    "Picture": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUVP5kZhAZlQjU3sttmDwG9kygpSamrmluYyWDXosUMd0vVMSJ",
    "BirthDate": "1978/01/09",
    "HireDate": "2009/08/11",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
    "Address": "424 N Main St."
}];

@Injectable()
export class Service {
    getEmployees() {
        return employees;
    }
}
