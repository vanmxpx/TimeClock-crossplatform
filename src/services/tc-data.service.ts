import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TimeTuple } from 'src/models/time/time-tuple';
import { Member } from 'src/models/subordinates/member';
import { OnlineStatus } from 'src/models/subordinates/online-status';
import { MemberStatus } from 'src/models/subordinates/member-status';

@Injectable({
  providedIn: 'root'
})
export class TCDataService {

    constructor(private http: HttpClientModule) {
    }

    public getMemberTime(login: string): TimeTuple[] {
        return [ { in: new Date(-1), out: new Date() },
            { in: new Date(-1), out: new Date() },
            { in: new Date(-1), out: new Date() },
            { in: new Date(-1), out: new Date() },
            { in: new Date(-1), out: new Date() },
            { in: new Date(-1), out: new Date() } 
        ];
    }
    public getMember(login: string): Member {
        return { login: 'mtsy', name: 'Mykyta', surname: 'Tsyhankov',
                division: "EPE", team: "OCS", supervisor: "Serhii Yatskovsky"}
    }

    public getMemberStatus(login: string): MemberStatus {
        return { status: OnlineStatus.In, dayTime: "06:23" }
    }

}
