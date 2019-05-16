import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TCDataService } from 'src/services/tc-data.service';
import { TimeTuple } from 'src/models/time/time-tuple';
import { MemberStatus } from 'src/models/subordinates/member-status';
import { Member } from 'src/models/subordinates/member';

@Component({
    selector: 'tc-time-management',
    templateUrl: 'time-management.page.html',
    styleUrls: ['time-management.page.scss']
})
export class TimeManagementPage implements OnInit {
    member: Member;
    memberStatus: MemberStatus;
    timeTuples: TimeTuple[];

    constructor(private menu: MenuController,
        private dataService: TCDataService) { }

    ngOnInit() { 
        this.member = this.dataService.getMember('temp');
        this.memberStatus = this.dataService.getMemberStatus('temp');
        this.timeTuples = this.dataService.getMemberTime('temp');
    }
    openFirst() {
        this.menu.enable(true, 'main');
        this.menu.open('main');
    }

    openEnd() {
        this.menu.open('end');
    }

    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
}
