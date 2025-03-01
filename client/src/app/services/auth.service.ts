import { Injectable } from '@angular/core';
import { AccountUser } from '../models/AccountUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getLoggedInUser(): AccountUser{
    return {
      id: '1',
      name: 'Sourabh Agrawal',
      email: 'Sourabh.agrawal@gmail.com',
      imageUrl: 'https://ui-avatars.com/api/?name=agrawal',
      type: 'admin'
    }
  }
}
