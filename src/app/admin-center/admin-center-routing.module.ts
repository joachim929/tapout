import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminCenterComponent } from './admin-center/admin-center.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';

const adminRoutes: Routes = [
  { path: 'edit',
    component: AdminCenterComponent,
    children: [
      {path: 'About', component: AboutComponent},
      {path: 'Home', component: HomeComponent},
      {path: 'Gallery', component: GalleryComponent},
      {path: 'Events', component: EventsComponent},
      {path: 'Contact', component: ContactComponent},
      {path: 'Menu', component: MenuComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(adminRoutes)],
  exports: [RouterModule]
})
export class AdminCenterRoutingModule { }
