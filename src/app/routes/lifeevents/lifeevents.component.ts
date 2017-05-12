import { Component, trigger, state, animate, transition, style, OnInit } from '@angular/core';

@Component({
  selector: 'ah-lifeevents',
  templateUrl: './lifeevents.component.html',
  styleUrls: ['./lifeevents.component.css'],
  animations: [
    trigger('collapseChange', [
        state('true' ,
            style({ height: '0', overflow : 'hidden' }),
        ),
        state('false',
            style({ height: '*' })
        ),
        transition('* => *', animate('.25s ease-in'))
    ]),
    trigger('iconChange', [
        state('true',
            style({ transform: 'rotate( -90deg )' })
        ),
        state('false',
            style({ transform: 'rotate( 0deg )' })
        ),
        transition('* => *', animate('.25s'))
    ])
]
})
export class LifeeventsComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
