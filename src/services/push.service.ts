import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PlatformType } from 'src/models/core/platform/platform-type';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
    get type(): PlatformType {
        if (this.platform.is(PlatformType.Android)) return PlatformType.Android;
        if (this.platform.is(PlatformType.Desktop)) return PlatformType.Desktop;
        return PlatformType.Unknown;
    }
    private platformLoaded: boolean = false;

    constructor(private platform: Platform) {
        this.platform.ready().then(() => this.prepare(), () => this.onPlatformFailed());
    }

    private prepare(): any {
        this.platformLoaded = true;
    }
    private onPlatformFailed(): any {
        this.platformLoaded = false;
    }

}
