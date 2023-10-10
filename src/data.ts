export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}

export const data: Data = {
    report: [
        {
            id: "uuid1",
            source: "Salary",
            amount: 7600,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME 
        },
        {
            id: "uuid2",
            source: "Part-Time",
            amount: 2600,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME 
        },
        {
            id: "uuid3",
            source: "Home Expense",
            amount: 1450,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE 
        }
    ]
}

interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[]
}