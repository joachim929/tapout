import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

// Components
import {AdminCenterComponent} from './admin-center/admin-center.component';
import {AboutComponent} from './about/about.component';
import {GalleryComponent} from './gallery/gallery.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {EventsComponent} from './events/events.component';
import {ContactComponent} from './contact/contact.component';
import {ImageContainerComponent} from './about/image-container/image-container.component';

// Modules
import {AdminCenterRoutingModule} from './admin-center-routing.module';

// Services
import {PageInfoService} from './shared/page-info.service';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
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
        ImageContainerComponent
    ],
    providers: [
        PageInfoService
    ]
})
export class AdminCenterModule {
}
