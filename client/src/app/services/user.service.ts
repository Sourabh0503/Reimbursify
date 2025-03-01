import { Injectable } from '@angular/core';
import { Departments, User } from '../models/User.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public readonly allUsers: User[] = [
        { id: '1', name: 'Sourabh Agrawal', email: 'sourabh.agrawal@gmail.com', imageUrl: 'assets/images/photos/user1.png', department: Departments.HR },
        { id: '2', name: 'Aditi Sharma', email: 'aditi.sharma@gmail.com', imageUrl: 'assets/images/photos/user2.png', department: Departments.IT },
        { id: '3', name: 'Rahul Mehta', email: 'rahul.mehta@gmail.com', imageUrl: 'assets/images/photos/user3.png', department: Departments.FINANCE },
        { id: '4', name: 'Neha Verma', email: 'neha.verma@gmail.com', imageUrl: 'assets/images/photos/user4.png', department: Departments.SALES },
        { id: '5', name: 'Vikram Singh', email: 'vikram.singh@gmail.com', imageUrl: 'assets/images/photos/user5.png', department: Departments.MARKETING },
        { id: '6', name: 'Pooja Patel', email: 'pooja.patel@gmail.com', imageUrl: 'assets/images/photos/user6.png', department: Departments.OPERATIONS },
        { id: '7', name: 'Rohit Khanna', email: 'rohit.khanna@gmail.com', imageUrl: 'assets/images/photos/user7.png', department: Departments.CUSTOMER_SUPPORT },
        { id: '8', name: 'Simran Kaur', email: 'simran.kaur@gmail.com', imageUrl: 'assets/images/photos/user8.png', department: Departments.LEGAL },
        { id: '9', name: 'Aman Joshi', email: 'aman.joshi@gmail.com', imageUrl: 'assets/images/photos/user9.png', department: Departments.RND },
        { id: '10', name: 'Kiran Das', email: 'kiran.das@gmail.com', imageUrl: 'assets/images/photos/user10.png', department: Departments.ADMIN },
    ]

    constructor() { }

    public getAllUser(): User[] {
        return this.allUsers;
    }

    public getUserById(id: string): User | undefined {
        return this.allUsers.find(item => item.id === id);
    }

}