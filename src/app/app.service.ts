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
    StateID: number;
}

export class State {
    ID: number;
    Name: string;
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
    "Address": "4600 N Virginia Rd.",
    "StateID": 5
}, {
    "ID": 2,
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Prefix": "Mr.",
    "Position": "Shipping Manager",
    "Picture": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUVP5kZhAZlQjU3sttmDwG9kygpSamrmluYyWDXosUMd0vVMSJ",
    "BirthDate": "1978/01/09",
    "HireDate": "2009/08/11",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing.",
    "Address": "424 N Main St.",
    "StateID": 4
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
    "Address": "2211 Bonita Dr.",
    "StateID": 5
}, {
    "ID": 4,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "Picture": "./assets/images/image-1.jpg",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing.",
    "Address": "12100 Mora Dr",
    "StateID": 3
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
    "Address": "12100 Mora Dr",
    "StateID": 4
}, {
    "ID": 6,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "Picture": "./assets/images/image-2.jpg",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing.",
    "Address": "12100 Mora Dr",
    "StateID": 7
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
    "Address": "4600 N Virginia Rd.",
    "StateID": 7
}, {
    "ID": 8,
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Prefix": "Mr.",
    "Position": "Shipping Manager",
    "Picture": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUVP5kZhAZlQjU3sttmDwG9kygpSamrmluYyWDXosUMd0vVMSJ",
    "BirthDate": "1978/01/09",
    "HireDate": "2009/08/11",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing.",
    "Address": "424 N Main St.",
    "StateID": 8
}, {
    "ID": 9,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "Picture": "./assets/images/download (1).jpg",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    "Address": "12100 Mora Dr",
    "StateID": 4
}, {
    "ID": 10,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Prefix": "Dr.",
    "Position": "Ombudsman",
    "Picture": "./assets/images/image-2.jpg",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing.",
    "Address": "12100 Mora Dr",
    "StateID": 7
},{
    "ID":11,
    "FirstName": "Sandra",
    "LastName": "Johnson",
    "Prefix": "Mrs.",
    "Position": "Controller",
    "Picture": "../assets/images/images.jpg",
    "BirthDate": "1974/11/15",
    "HireDate": "2005/05/11",
    "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
    "Address": "4600 N Virginia Rd.",
    "StateID": 7
}, {
    "ID": 12,
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Prefix": "Mr.",
    "Position": "Shipping Manager",
    "Picture": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUVP5kZhAZlQjU3sttmDwG9kygpSamrmluYyWDXosUMd0vVMSJ",
    "BirthDate": "1978/01/09",
    "HireDate": "2009/08/11",
    "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing.",
    "Address": "424 N Main St.",
    "StateID": 8
}];

let states: State[] = [{
    "ID": 1,
    "Name": "Alabama"
}, {
    "ID": 2,
    "Name": "Alaska"
}, {
    "ID": 3,
    "Name": "Arizona"
}, {
    "ID": 4,
    "Name": "Arkansas"
}, {
    "ID": 5,
    "Name": "California"
}, {
    "ID": 6,
    "Name": "Colorado"
}, {
    "ID": 7,
    "Name": "Connectictu"
}, {
    "ID": 8,
    "Name": "Delaware"
}, {
    "ID": 9,
    "Name": "District of Columbia"
}, {
    "ID": 10,
    "Name": "Florida"
}, {
    "ID": 11,
    "Name": "Georgia"
}, {
    "ID": 12,
    "Name": "Hawaii"
}, {
    "ID": 13,
    "Name": "Idaho"
}, {
    "ID": 14,
    "Name": "Illinois"
}, {
    "ID": 15,
    "Name": "Indiana"
}, {
    "ID": 16,
    "Name": "Iowa"
}, {
    "ID": 17,
    "Name": "Kansas"
}, {
    "ID": 18,
    "Name": "Kentucky"
}, {
    "ID": 19,
    "Name": "Louisiana"
}, {
    "ID": 20,
    "Name": "Maine"
}, {
    "ID": 21,
    "Name": "Maryland"
}, {
    "ID": 22,
    "Name": "Massachusetts"
}, {
    "ID": 23,
    "Name": "Michigan"
}, {
    "ID": 24,
    "Name": "Minnesota"
}, {
    "ID": 25,
    "Name": "Mississippi"
}, {
    "ID": 26,
    "Name": "Missouri"
}, {
    "ID": 27,
    "Name": "Montana"
}, {
    "ID": 28,
    "Name": "Nebraska"
}, {
    "ID": 29,
    "Name": "Nevada"
}, {
    "ID": 30,
    "Name": "New Hampshire"
}, {
    "ID": 31,
    "Name": "New Jersey"
}, {
    "ID": 32,
    "Name": "New Mexico"
}, {
    "ID": 33,
    "Name": "New York"
}, {
    "ID": 34,
    "Name": "North Carolina"
}, {
    "ID": 35,
    "Name": "Ohio"
}, {
    "ID": 36,
    "Name": "Oklahoma"
}, {
    "ID": 37,
    "Name": "Oregon"
}, {
    "ID": 38,
    "Name": "Pennsylvania"
}, {
    "ID": 39,
    "Name": "Rhode Island"
}, {
    "ID": 40,
    "Name": "South Carolina"
}, {
    "ID": 41,
    "Name": "South Dakota"
}, {
    "ID": 42,
    "Name": "Tennessee"
}, {
    "ID": 43,
    "Name": "Texas"
}, {
    "ID": 44,
    "Name": "Utah"
}, {
    "ID": 45,
    "Name": "Vermont"
}, {
    "ID": 46,
    "Name": "Virginia"
}, {
    "ID": 47,
    "Name": "Washington"
}, {
    "ID": 48,
    "Name": "West Virginia"
}, {
    "ID": 49,
    "Name": "Wisconsin"
}, {
    "ID": 50,
    "Name": "Wyoming"
}, {
    "ID": 51,
    "Name": "North Dakota"
}];

@Injectable()
export class Service {
    getEmployees() {
        return employees;
    }

    getStates() {
        return states;
    }
}
