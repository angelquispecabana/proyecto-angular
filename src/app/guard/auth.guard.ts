import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private router: Router,
        private authService: AuthService
    ){}

    canActivate(): boolean{
        const currentUser = this.authService.currentUserValue;
        if (currentUser){
            return true;
        }
        this.router.navigate(['/login']);
    }
}
