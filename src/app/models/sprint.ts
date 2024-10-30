export class Sprint {
    constructor(
      public _id: string,
      public sprint_name: string,
      public start_date: Date,
      public end_date: Date,
      public sprint_status: string
    ) {}

}
