import { Subject } from './Subject';
export interface Teacher{
    _id?:string,
    name:string,
    email:string,
    office:string,
    puntuation:number,
    subjects: Array<Subject['_id']> 
}