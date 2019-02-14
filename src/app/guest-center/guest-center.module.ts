import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import {GuestCenterComponent} from './guest-center.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {MenuComponent} from './pages/menu/menu.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {EventsComponent} from './pages/events/events.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import {DeliveryComponent} from './pages/delivery/delivery.component';

// Modules
import {GuestCenterRoutingModule} from './guest-center-routing.module';

// Services

@NgModule({
    imports: [
        NgbModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        GuestCenterRoutingModule
    ],
    declarations: [
        GuestCenterComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        MenuComponent,
        GalleryComponent,
        EventsComponent,
        ContactComponent,
        AboutComponent,
        DeliveryComponent
    ],
    providers: [

    ]
})
export class GuestCenterModule {
}
