import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { TimeTuple } from 'src/models/time/time-tuple';

@Component({
    selector: 'tc-time-view',
    templateUrl: './time-view.component.html',
    styleUrls: ['./time-view.component.scss']
})
export class TimeViewComponent implements OnInit {

    @Input() timeTuples: TimeTuple[];
    constructor() { }

    ngOnInit() {
    }

}
