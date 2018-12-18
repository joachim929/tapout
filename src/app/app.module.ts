import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Main website components
import {AppComponent} from './app.component';
// Services for website components

// Modules
import {AdminCenterModule} from './admin-center/admin-center.module';
import {GuestCenterModule} from './guest-center/guest-center.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        AdminCenterModule,
        GuestCenterModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
