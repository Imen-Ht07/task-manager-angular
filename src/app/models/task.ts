export class Task {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public status: 'to do' | 'in progress'| 'to review' | 'completed'  ,
        public priority: 'low' | 'medium' | 'high',
        public tag: string,
        public storyPoint: number,
        public dueDate: Date,
          //memberId is added to the Task model
        public memberId: string,
        //sprintId is added to the Task model
        public sprintId: string
        ) {}

}
