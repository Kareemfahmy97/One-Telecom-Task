import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(public authService: AuthService) {}
  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  loginUser(email: string, password: string) {
    this.authService.logInUser(email, password);
    this.isLoggedIn = this.authService.isLoggedIn;
  }
  logOut() {
    this.authService.logOutUser();
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
