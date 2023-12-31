import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './service/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userservice: UserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.userservice.userValue;
        if (user ) {
            // authorised so return true
            console.log(user.role)
            return true;
        }

        // not logged in so redirect to login page with the return url
        else {
            this.router.navigate(['login']);
        return false;
        }
        
    }
}