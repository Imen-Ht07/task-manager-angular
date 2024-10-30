export class Member {
    constructor(
        public id:string,
        public memberName: string,
        public memberEmail: string,
        public  totalTime: string, // Use string to represent TIME in HH:MM format
        public daysWorked: number,
        public avgTime: string, // Use string to represent TIME in HH:MM format
    ) {}
}

