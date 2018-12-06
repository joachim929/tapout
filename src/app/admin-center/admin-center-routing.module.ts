import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import {AdminCenterComponent} from './admin-center.component';
import {AboutComponent} from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {EventsComponent} from './pages/events/events.component';
import {ContactComponent} from './pages/contact/contact.component';
import {MenuComponent} from './pages/menu/menu.component';

const adminRoutes: Routes = [
    {
        path: 'edit',
        component: AdminCenterComponent,
        children: [
            {
                path: 'about', component: AboutComponent
            },
            {path: 'home', component: HomeComponent},
            {path: 'gallery', component: GalleryComponent},
            {path: 'events', component: EventsComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'menu', component: MenuComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(adminRoutes)],
    exports: [RouterModule]
})
export class AdminCenterRoutingModule {
}
