import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

  subjects:any;
  selectedSubjects:any;
  selected: boolean;
  constructor(private teacherService: TeacherService, private router: Router, private subjectsServices:SubjectService) {
    this.subjects=[];
    this.selectedSubjects=[]
    this.selected=false;
  }

  ngOnInit(): void {
    this.subjectsServices.getSubjects().subscribe(
      res=> {
        this.subjects=res
      },
      err=>console.log(err)
    )
  }

  addTeacher(name:HTMLInputElement,email:HTMLInputElement,office:HTMLInputElement,punct:HTMLInputElement ):boolean {

    let teacher = {'_id':"",'name':name.value, 'email':email.value, 'office':office.value,'puntuation':+punct.value,'subjects':this.selectedSubjects};
    console.log("New: ");
    console.log(teacher);
    this.teacherService.createTeacher(teacher).subscribe(res=>{
      this.router.navigate(['/teachers']);},
      err=>console.log(err))

    return false

  }

    onchange(id:string){
    this.subjectsServices.getSubject(id).subscribe(
      res=> {
        this.selectedSubjects.push(res._id)
      },
      err=>console.log(err)
    )
    

  }
}
