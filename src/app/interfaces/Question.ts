import { User } from "./User";
export interface Question{
    _id?:string,
    creator: User['_id'],
    question: string,
    createdAt:Date,                                                                                                  //nose pq no me deja ponerle date, me da conflicto pf
    solved: boolean,
    answerCountNumber:number
}   