import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = true;
  mode = 'side';
  isloggedIn: boolean;

  title = 'docs';

  constructor(private userService: UserService) {
    this.userService.isloggedIn.subscribe(
      data => {
        this.isloggedIn = data;
      }
    )
  }
}
