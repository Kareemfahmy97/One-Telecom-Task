import { AuthService } from './../../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  constructor(public authService : AuthService){
    
  }

}
