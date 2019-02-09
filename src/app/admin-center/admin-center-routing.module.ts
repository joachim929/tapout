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
import {EditMenuItemsComponent} from './pages/menu/edit-menu-items/edit-menu-items.component';
import {EditMenuCategoryComponent} from './pages/menu/edit-menu-category/edit-menu-category.component';
import {NewMenuCategoryComponent} from './pages/menu/new-menu-category/new-menu-category.component';
import {NewMenuItemComponent} from './pages/menu/new-menu-item/new-menu-item.component';
import {NewEventItemComponent} from "./pages/events/new-event-item/new-event-item.component";
import {EditEventItemsComponent} from "./pages/events/edit-event-items/edit-event-items.component";
import {NewEventCategoryComponent} from "./pages/events/new-event-category/new-event-category.component";
import {EditEventCategoryComponent} from "./pages/events/edit-event-category/edit-event-category.component";

const adminRoutes: Routes = [
    {
        path: 'edit',
        component: AdminCenterComponent,
        children: [
            {path: 'about', component: AboutComponent},
            {path: 'home', component: HomeComponent},
            {path: 'gallery', component: GalleryComponent},
            {
                path: 'events',
                component: EventsComponent,
                children: [
                    {
                        path: 'add-item',
                        component: NewEventItemComponent
                    },
                    {
                        path: 'edit-items',
                        component: EditEventItemsComponent
                    },
                    {
                        path: 'add-category',
                        component: NewEventCategoryComponent
                    },
                    {
                        path: 'edit-category',
                        component: EditEventCategoryComponent
                    }
                ]
            },
            {path: 'contact', component: ContactComponent},
            {
                path: 'menu',
                component: MenuComponent,
                children: [
                    {
                        path: 'add-item',
                        component: NewMenuItemComponent
                    },
                    {
                        path: 'edit-items',
                        component: EditMenuItemsComponent
                    },
                    {
                        path: 'add-category',
                        component: NewMenuCategoryComponent
                    },
                    {
                        path: 'edit-category',
                        component: EditMenuCategoryComponent
                    },
                    {
                        path: '',
                        redirectTo: '/edit/menu',
                        pathMatch: 'full'
                    }
                ]
            },
            {
                path: '**',
                redirectTo: '/edit'
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(adminRoutes)],
    exports: [RouterModule]
})
export class AdminCenterRoutingModule {
}
