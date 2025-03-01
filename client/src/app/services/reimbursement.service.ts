import { Injectable } from '@angular/core';
import { ReimbursementRequest, Status } from '../models/ReimbursmentRequest.model';
import { ViolatorData } from '../models/ViolatorsData.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {
  public AllReimbursementRequests: ReimbursementRequest[] = [
    { id: '1', title: 'Travel Expenses', date: new Date('2024-02-01'), category: 'Travel', userid: '2', amount: 1500, status: Status.approved },
    { id: '2', title: 'Hotel Stay', date: new Date('2024-01-15'), category: 'Lodging', userid: '3', amount: 5000, status: Status.paid },
    { id: '3', title: 'Client Lunch', date: new Date('2024-02-10'), category: 'Food', userid: '4', amount: 750, status: Status.pending },
    { id: '4', title: 'Office Supplies', date: new Date('2024-01-25'), category: 'Supplies', userid: '5', amount: 1200, status: Status.rejected },
    { id: '5', title: 'Taxi Fare', date: new Date('2024-02-05'), category: 'Transport', userid: '6', amount: 4000, status: Status.screening },
    { id: '6', title: 'Flight Ticket', date: new Date('2024-01-30'), category: 'Travel', userid: '7', amount: 8000, status: Status.approved },
    { id: '7', title: 'Conference Fee', date: new Date('2024-02-08'), category: 'Training', userid: '8', amount: 3000, status: Status.pending },
    { id: '8', title: 'Team Dinner', date: new Date('2024-01-28'), category: 'Food', userid: '9', amount: 200, status: Status.paid },
    { id: '9', title: 'Software Subscription', date: new Date('2024-02-12'), category: 'Software', userid: '10', amount: 1200, status: Status.approved },
    { id: '10', title: 'Medical Reimbursement', date: new Date('2024-01-20'), category: 'Medical', userid: '1', amount: 2500, status: Status.rejected },
    { id: '11', title: 'Office Furniture', date: new Date('2024-02-14'), category: 'Office', userid: '2', amount: 6000, status: Status.pending },
    { id: '12', title: 'Online Course', date: new Date('2024-01-18'), category: 'Education', userid: '3', amount: 2000, status: Status.screening },
    { id: '13', title: 'Mileage Reimbursement', date: new Date('2024-02-07'), category: 'Transport', userid: '4', amount: 500, status: Status.approved },
    { id: '14', title: 'Mobile Bill', date: new Date('2024-01-27'), category: 'Communication', userid: '5', amount: 900, status: Status.paid },
    { id: '15', title: 'Internet Charges', date: new Date('2024-02-02'), category: 'Utilities', userid: '6', amount: 600, status: Status.rejected },
    { id: '16', title: 'Office Event', date: new Date('2024-02-09'), category: 'Entertainment', userid: '7', amount: 5000, status: Status.screening },
    { id: '17', title: 'Parking Charges', date: new Date('2024-01-22'), category: 'Transport', userid: '8', amount: 3000, status: Status.pending },
    { id: '18', title: 'IT Equipment', date: new Date('2024-02-11'), category: 'Electronics', userid: '9', amount: 7000, status: Status.approved },
    { id: '19', title: 'Gym Membership', date: new Date('2024-01-26'), category: 'Health', userid: '10', amount: 1000, status: Status.rejected },
    { id: '20', title: 'Marketing Ads', date: new Date('2024-02-06'), category: 'Marketing', userid: '1', amount: 10000, status: Status.paid },
  ];

  constructor() { }

  public getAllReimbursementRequests(): ReimbursementRequest[] {
    return this.AllReimbursementRequests;
  }

  public getTopViolators(count: number): ViolatorData[] {
    const Violator = this.AllReimbursementRequests.reduce((acc, { userid, amount }) => {
      if (!acc[userid]) {
        acc[userid] = { UserId: userid, count: 0, amount: 0 };
      }
      acc[userid].count += 1;
      acc[userid].amount += amount;
      return acc;
    }, {} as Record<string, ViolatorData>);
  
    return Object.values(Violator)
      .sort((a, b) => b.amount - a.amount)
      .slice(0, count);
  }
}
