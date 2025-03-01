import { Injectable } from '@angular/core';
import { Departments, User } from '../models/User.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public readonly allUsers: User[] = [
        { id: '1', name: 'Sourabh Agrawal', email: 'sourabh.agrawal@gmail.com', imageUrl: 'https://ui-avatars.com/api/?name=Sourabh+Agrawal', department: Departments.HR },
        { id: '2', name: 'Aditi Sharma', email: 'aditi.sharma@gmail.com', imageUrl: 'https://ui-avatars.com/api/?name=Aditi+Sharma', department: Departments.IT },
        { id: '3', name: 'Rahul Mehta', email: 'rahul.mehta@gmail.com', imageUrl: 'https://ui-avatars.com/api/?name=Rahul+Mehta', department: Departments.FINANCE },
        { id: '4', name: 'Neha Verma', email: 'neha.verma@gmail.com', imageUrl: 'https://ui-avatars.com/api/?name=Neha+Verma', department: Departments.SALES },
        { id: '5', name: 'Vikram Singh', email: 'vikram.singh@gmail.com', imageUrl: 'https://ui-avatars.com/api/?name=Vikram+Singh', department: Departments.MARKETING },
        { id: '6', name: 'Pooja Patel', email: 'pooja.patel@gmail.com', imageUrl: 'https://ui-avatars.com/api/?name=Pooja+Patel', department: Departments.OPERATIONS },
        { id: '7', name: 'Rohit Khanna', email: 'rohit.khanna@gmail.com', imageUrl: 'https://ui-avatars.com/api/?name=Rohit+Khanna', department: Departments.CUSTOMER_SUPPORT },
        { id: '8', name: 'Simran Kaur', email: 'simran.kaur@gmail.com', imageUrl: 'https://ui-avatars.com/api/?name=Simran+Kaur', department: Departments.LEGAL },
        { id: '9', name: 'Aman Joshi', email: 'aman.joshi@gmail.com', imageUrl: 'https://ui-avatars.com/api/?name=Aman+Joshi', department: Departments.RND },
        { id: '10', name: 'Kiran Das', email: 'kiran.das@gmail.com', imageUrl: 'https://ui-avatars.com/api/?name=Kiran+Das', department: Departments.ADMIN },
    ]

    constructor() { }

    public getAllUser(): User[] {
        return this.allUsers;
    }

    public getUserById(id: string): User | undefined {
        return this.allUsers.find(item => item.id === id);
    }

}