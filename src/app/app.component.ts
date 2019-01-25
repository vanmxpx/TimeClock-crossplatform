import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalNotifications, ILocalNotificationActionType } from '@ionic-native/local-notifications/ngx';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private toastController: ToastController,
        private localNotifications: LocalNotifications
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.prepareFunctional();
        });
    }


    prepareFunctional(): void {

        /*
         *  https://github.com/katzer/cordova-plugin-local-notifications
        */

        // this.localNotifications.schedule([{
        //     id: 1,
        //     text: 'Multi ILocalNotification 1',
        //     sound: this.platform.is('android') ? 'file://sound.mp3' : 'file://beep.caf',
        //     data: { secret: '' }
        // }, {
        //     id: 2,
        //     title: 'Local ILocalNotification Example',
        //     text: 'Multi ILocalNotification 2',
        //     icon: 'assets/icon/favicon.ico',
        //     actions: [{
        //         id: 'reply',
        //         type: ILocalNotificationActionType.INPUT,
        //         title: 'Reply'
        // }, {
        //     text: 'Delayed ILocalNotification',
        //     trigger: { at: new Date(new Date().getTime() + 3600) },
        //     led: 'FF0000',
        //     sound: null
        // }]
        // }]);

        // setInterval(() => this.presentToast('Priveеt'), 1000);
    }

    private async presentToast(message: string) {
        const toast = await this.toastController.create({
            message,
            duration: 3000
        });
        toast.present();
    }
}
