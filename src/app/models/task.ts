export class Task {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public status: string,
        public priority: string,
        public tag: string,
        public storyPoint: number,
        public dueDate: Date,
          //memberId is added to the Task model
        public memberId: string,
        //sprintId is added to the Task model
        public sprintId: string
        ) {}

}
