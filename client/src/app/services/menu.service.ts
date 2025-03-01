import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public activeMenu: ReplaySubject<string| null>;
  public position: {x: number, y: number} = {x: 0, y: 0};

  constructor() {
    this.activeMenu = new ReplaySubject<string | null>(1);
  }

  setActiveMenu(menu: string, position: {x: number, y: number}) {
    this.activeMenu.next(menu);
    this.position = position;
  }

  clearActiveMenu() {
    this.activeMenu.next(null);
  }
}
