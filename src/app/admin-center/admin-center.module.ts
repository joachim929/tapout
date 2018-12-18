import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Components
import {AdminCenterComponent} from './admin-center.component';
import {AboutComponent} from './pages/about/about.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {HomeComponent} from './pages/home/home.component';
import {MenuComponent} from './pages/menu/menu.component';
import {EventsComponent} from './pages/events/events.component';
import {ContactComponent} from './pages/contact/contact.component';
import {HeaderComponent} from './components/header/header.component';

// Modules
import {AdminCenterRoutingModule} from './admin-center-routing.module';

// Services
import {PageInfoService} from './shared/page-info.service';
import { NewItemComponent } from './components/new-item/new-item.component';
import { NewImageComponent } from './components/new-image/new-image.component';
import { ImageComponent } from './components/image/image.component';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        AdminCenterRoutingModule
    ],
    declarations: [
        AdminCenterComponent,
        AboutComponent,
        GalleryComponent,
        HomeComponent,
        MenuComponent,
        EventsComponent,
        ContactComponent,
        HeaderComponent,
        NewItemComponent,
        NewImageComponent,
        ImageComponent
    ],
    providers: [
        PageInfoService
    ]
})
export class AdminCenterModule {
}
