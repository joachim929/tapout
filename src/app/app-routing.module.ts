import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {
        path: 'home',
        loadChildren: './guest-center/guest-center.module#GuestCenterModule',
        data: {preload: true},
    },
    {
        path: 'admin',
        loadChildren: './admin-center/admin-center.module#AdminCenterModule',
        data: { preload: true}
    },
    {path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
