import {NgModule} from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';

import {MenuComponent} from './menu/menu.component';
import {GalleryComponent} from './gallery/gallery.component';
import {EventsComponent} from './events/events.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {EditComponent} from './edit/edit.component';
import {EditAboutComponent} from './edit-about/edit-about.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'events', component: EventsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'test', component: EditComponent},
    {path: 'test/about', component: EditAboutComponent},
    {
        path: 'edit',
        loadChildren: './admin-center/admin-center.module#AdminCenterModule',
        data: { preload: true}
    },
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
