import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Main website components
import {AppComponent} from './app.component';
// Services for website components
import {ExternalLinksService} from './shared/external-links.service';

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
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        AdminCenterModule,
        GuestCenterModule,
        AppRoutingModule
    ],
    providers: [ExternalLinksService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
