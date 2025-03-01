import { Component, Input, input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-user-name',
  standalone: false,
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.css'
})
export class UserNameComponent {
  @Input() userId: string | undefined;
  @Input() showDepartment: boolean= false;
  user: User | undefined;
  constructor(private readonly userService:UserService) {
  }

  ngOnChanges(){
    this.user = this.userService.getUserById(this.userId??'-1');
  }
}
