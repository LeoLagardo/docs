import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userName: string;
  constructor(private us: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.us.userName.subscribe(
      data => {
        this.userName = data;
      }
    )
  }

  logOut() {
    this.us.changeIsLoggedIn(false);
    this.router.navigate(['/login']);
  }

}
