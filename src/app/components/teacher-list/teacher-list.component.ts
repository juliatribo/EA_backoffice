import { Component, OnInit } from '@angular/core';
import { Subject } from '../../interfaces/Subject';
import { Teacher } from '../../interfaces/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { SubjectService } from 'src/app/services/subject.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers: Array<Teacher>;
  subjects: any;
  subject: Subject;
  constructor(private teachersService:TeacherService, private router:Router, private subjectsServices:SubjectService) { 
    this.teachers = [];
    this.subjects = [];
    this.subject=<Subject>{}
  }

  ngOnInit(): void {
    this.teachersService.getTeachers()
    .subscribe(
      res=>{ this.teachers=res
      },
      err=>console.log(err))

      this.subjectsServices.getSubjects()
    .subscribe(
      res=>{ this.subjects=res
        
      },
      err=>console.log(err))

  }

  selectedCard(id:string| undefined){
    this.router.navigate(['/teachers',id])
  }

}
