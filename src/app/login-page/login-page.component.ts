import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public fb: FormBuilder, private us: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Contact_Email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(form) {
    this.us.logIn(form.value).subscribe(
      data => {
        if(data.msg === 'success') {
          this.us.changeIsLoggedIn(true)
          this.authService.setToken(data.data);
          this.us.setUser(data.user.Contact_Name);
          this.router.navigate(['/document-list']);
        }
      }
    )
  }

}
