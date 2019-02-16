import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TaskRouteService {
    public _baseNav: string;

    constructor(private router: Router) {
    }

    get baseNav(): string {
        return this._baseNav;
    }

    set baseNav(location: string) {
        this._baseNav = location;
    }

    routeToMenu() {
        this.router.navigate([this.baseNav]);
    }
}
