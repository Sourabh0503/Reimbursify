export interface Notification{
    id: string,
    type: NotificationType,
    description: string,
    time: Date,
    isNew: boolean
}

export enum NotificationType{
    Accept = 'accept',
    Decline = 'decline',
    Info = 'info'
}