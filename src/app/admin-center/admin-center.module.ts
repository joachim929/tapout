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
import {PageItemComponent} from './about/page-item/page-item.component';

// Modules
import {AdminCenterRoutingModule} from './admin-center-routing.module';

// Services
import {PageInfoService} from './shared/page-info.service';
import { NewItemComponent } from './about/new-item/new-item.component';
import { NewImageComponent } from './about/new-image/new-image.component';

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
        ImageContainerComponent,
        PageItemComponent,
        NewItemComponent,
        NewImageComponent
    ],
    providers: [
        PageInfoService
    ]
})
export class AdminCenterModule {
}
