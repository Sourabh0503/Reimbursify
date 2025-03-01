import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountUser } from '../../models/AccountUser.model';

@Component({
  selector: 'app-profile-menu',
  standalone: false,
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss'
})
export class ProfileMenuComponent {
  loggedInUser: AccountUser| null = null;

  constructor(private readonly authService: AuthService) {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

}
