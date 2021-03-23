import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
   isLoggedIn: boolean;
    constructor(private router: Router, private userService: UserService) {
      this.userService.isloggedIn.subscribe(
        data => {
          this.isLoggedIn = data;
        }
      )
    }

    canActivate() {
      if (this.isLoggedIn) {
        return true;
      }
    this.router.navigate(['/login']);
  }
}