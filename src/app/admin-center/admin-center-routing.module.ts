import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import {AdminCenterComponent} from './admin-center/admin-center.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {GalleryComponent} from './gallery/gallery.component';
import {EventsComponent} from './events/events.component';
import {ContactComponent} from './contact/contact.component';
import {MenuComponent} from './menu/menu.component';
import {NewItemComponent} from './about/new-item/new-item.component';
import {NewImageComponent} from './about/new-image/new-image.component';

const adminRoutes: Routes = [
    {
        path: 'edit',
        component: AdminCenterComponent,
        children: [
            {
                path: 'About', component: AboutComponent, children: [
                {path: 'Item', component: NewItemComponent},
                {path: 'Image', component: NewImageComponent}
            ]
            },
            {path: 'Home', component: HomeComponent},
            {path: 'Gallery', component: GalleryComponent},
            {path: 'Events', component: EventsComponent},
            {path: 'Contact', component: ContactComponent},
            {path: 'Menu', component: MenuComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(adminRoutes)],
    exports: [RouterModule]
})
export class AdminCenterRoutingModule {
}
