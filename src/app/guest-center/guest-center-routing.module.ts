import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import {GuestCenterComponent} from './guest-center.component';
import {HomeComponent} from './pages/home/home.component';
import {MenuComponent} from './pages/menu/menu.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {EventsComponent} from './pages/events/events.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutComponent} from './pages/about/about.component';
import {DeliveryComponent} from './pages/delivery/delivery.component';


const guestRoutes: Routes = [
    {
        path: '',
        component: GuestCenterComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'menu', component: MenuComponent},
            {path: 'gallery', component: GalleryComponent},
            {path: 'events', component: EventsComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'about', component: AboutComponent},
            {path: 'delivery', component: DeliveryComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(guestRoutes)],
    exports: [RouterModule]
})
export class GuestCenterRoutingModule {
}
