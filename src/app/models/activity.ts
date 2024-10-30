export class Activity {
   constructor(
    public id:string,
    public activityDesc: string,
    public activityDur: string, 
    public  activityDatetime: Date,
    //taskId is added to the Activity model
    public taskId: string,
    //memberId is added to the Activity model
    public memberId: string,

   ){}
}
