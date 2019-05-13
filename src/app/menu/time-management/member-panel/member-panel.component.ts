import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Member } from 'src/models/subordinates/member';
import { MemberStatus } from 'src/models/subordinates/member-status';

@Component({
    selector: 'tc-member-panel',
    templateUrl: './member-panel.component.html',
    styleUrls: ['./member-panel.component.scss']
})
export class MemberPanelComponent implements OnInit {

    @Input() member: Member;
    @Input() memberStatus: MemberStatus;
    constructor() { }

    ngOnInit() {
    }

}
