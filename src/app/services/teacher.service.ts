import { Injectable } from '@angular/core';
import {Teacher} from '../interfaces/Teacher'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  URI='http://localhost:4000/teachers'
  constructor(private http: HttpClient) { }

  createTeacher(teacher: Teacher){
    return this.http.post(this.URI,teacher)
  }

  getTeachers(){
    return this.http.get<Teacher[]>(this.URI);
  }

  getTeacher(id: string){
    return this.http.get<Teacher>(this.URI+'/'+ id)
  }

  deleteTeacher(id: string){
    return this.http.delete(this.URI+'/'+ id) //tb ho podria posar com a delete(`${this.URI}/${id}`)
  }

  updateTeacher(teacher: Teacher){
    return this.http.put(this.URI+'/'+teacher._id,teacher)
  }

}

