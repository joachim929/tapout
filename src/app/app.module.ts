import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Main website components
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {GalleryComponent} from './gallery/gallery.component';
import {EventsComponent} from './events/events.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { VisitorComponent } from './visitor/visitor.component';
// Services for website components

// Modules
import { AdminCenterModule } from './admin-center/admin-center.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        GalleryComponent,
        EventsComponent,
        ContactComponent,
        AboutComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        VisitorComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AdminCenterModule,
        AppRoutingModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
