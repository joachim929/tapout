import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import {AdminCenterComponent} from './admin-center.component';
import {AboutComponent} from './pages/about/about.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {HomeComponent} from './pages/home/home.component';
import {MenuComponent} from './pages/menu/menu.component';
import {EventsComponent} from './pages/events/events.component';
import {ContactComponent} from './pages/contact/contact.component';
import {HeaderComponent} from './components/header/header.component';
import {NewItemComponent} from './components/new-item/new-item.component';
import {NewImageComponent} from './components/new-image/new-image.component';
import {ImageComponent} from './components/image/image.component';
import {NewMenuCategoryComponent} from './pages/menu/new-menu-category/new-menu-category.component';
import {NewMenuItemComponent} from './pages/menu/new-menu-item/new-menu-item.component';
import {EditMenuCategoryComponent} from './pages/menu/edit-menu-category/edit-menu-category.component';
import {EditMenuItemsComponent} from './pages/menu/edit-menu-items/edit-menu-items.component';
import {NotificationComponent} from './components/notification/notification.component';
import {NewEventItemComponent} from './pages/events/new-event-item/new-event-item.component';
import {NewEventCategoryComponent} from './pages/events/new-event-category/new-event-category.component';
import {EditEventCategoryComponent} from './pages/events/edit-event-category/edit-event-category.component';
import {EditEventItemsComponent} from './pages/events/edit-event-items/edit-event-items.component';
import {TapoutDateTimePickerComponent} from './components/tapout-date-time-picker/tapout-date-time-picker.component';

// Modules
import {AdminCenterRoutingModule} from './admin-center-routing.module';

// Services
import {PageInfoService} from './shared/page-info.service';

@NgModule({
    imports: [
        NgbModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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
        ImageComponent,
        NewMenuCategoryComponent,
        NewMenuItemComponent,
        EditMenuCategoryComponent,
        EditMenuItemsComponent,
        NotificationComponent,
        NewEventItemComponent,
        NewEventCategoryComponent,
        EditEventCategoryComponent,
        EditEventItemsComponent,
        TapoutDateTimePickerComponent
    ],
    providers: [
        PageInfoService
    ]
})
export class AdminCenterModule {
}
