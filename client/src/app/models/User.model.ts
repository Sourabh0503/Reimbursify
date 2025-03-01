export interface User{
    id: string;
    name: string;
    email: string;
    imageUrl: string;
    department : Departments;
}

export enum Departments {
    HR = "Human Resources",
    IT = "Information Technology",
    FINANCE = "Finance",
    SALES = "Sales",
    MARKETING = "Marketing",
    OPERATIONS = "Operations",
    CUSTOMER_SUPPORT = "Customer Support",
    LEGAL = "Legal",
    RND = "Research and Development",
    ADMIN = "Administration",
}