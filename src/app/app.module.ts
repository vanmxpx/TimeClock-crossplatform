import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,

    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        MaterialModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        LocalNotifications,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
