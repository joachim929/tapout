import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from './menu/menu.component';
import {GalleryComponent} from './gallery/gallery.component';
import {EventsComponent} from './events/events.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        GalleryComponent,
        EventsComponent,
        ContactComponent,
        AboutComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
