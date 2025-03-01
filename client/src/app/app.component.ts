import { Component, HostListener} from '@angular/core';
import { MenuService } from './services/menu.service';
import { AccountUser } from './models/AccountUser.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  activeMenu: string | null = null;
  loggedInuser: AccountUser | null = null;
  constructor(public readonly menuService: MenuService , private readonly authService: AuthService) {
    this.loggedInuser = this.authService.getLoggedInUser();
    this.menuService.activeMenu.subscribe(menu => {
      console.log(menu);
      this.activeMenu = menu}); 
  }

  @HostListener('document:click')
  onClick() {
    if(this.activeMenu){
      this.menuService.clearActiveMenu();
    }
  }

  toggleMenu(event: MouseEvent,menu: string) {
    event.preventDefault();
    event.stopPropagation();
    if (this.activeMenu === menu) {
      this.menuService.clearActiveMenu();
    } else {
      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      this.menuService.setActiveMenu(menu, {x: event.clientX, y: 70});
    }
  }
}
