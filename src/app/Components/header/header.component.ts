import { AuthService } from 'src/app/Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn: boolean;
  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
  ngOnInit(): void {
    this.authService.getUserLoginStatus().subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
  logOut(): void {
    this.authService.logOutUser();
    this.authService.getUserLoginStatus().subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
}
