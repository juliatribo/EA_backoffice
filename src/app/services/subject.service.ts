import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from '../interfaces/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {


  URI="http://localhost:4000/subjects";
  constructor(private http:HttpClient) { }

  createSubject(subject:Subject){
    return this.http.post(this.URI,subject)
  }

  getSubjects(){
    return this.http.get(this.URI)
  }

  getSubject(id: string){
    return this.http.get<Subject>(this.URI+'/'+ id)
  }

}
