export interface ReimbursementRequest{
    id: string,
    title: string,
    date: Date,
    category: string,
    userid: string,
    amount: number,
    status: Status,
}

export enum Status{
    screening = 'screening',
    paid = 'paid',
    approved = 'approved',
    rejected = 'rejected',
    pending = 'pending'
}