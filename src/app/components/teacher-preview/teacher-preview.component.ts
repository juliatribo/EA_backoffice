import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/interfaces/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-teacher-preview',
  templateUrl: './teacher-preview.component.html',
  styleUrls: ['./teacher-preview.component.css']
})
export class TeacherPreviewComponent implements OnInit {

  id: string;
  teacher: Teacher;
  //subjects: Array<Subject>;
  subjects: any;
  selectedSubjects:any;

  constructor(private router:Router, private activeRoute:ActivatedRoute, private teachersServices:TeacherService, private subjectsServices:SubjectService) { 
    this.id="";
    this.teacher=<Teacher>{};
    this.subjects=[];
    this.selectedSubjects=[];
  }

  ngOnInit(): void{
    this.activeRoute.params.subscribe(params=>{
      this.id = params['id'];
      this.teachersServices.getTeacher(this.id).subscribe(
        res=>{
          this.teacher=res;
        },
        err=>console.log(err)
      )
    })
    this.subjectsServices.getSubjects().subscribe(
      res=> {
        this.subjects=res
      },
      err=>console.log(err)
    )
  }

  deleteTeacher(){
    this.teachersServices.deleteTeacher(this.id)
    .subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/teachers'])
      },
      err=>console.log(err) 
    )
  }

  updateTeacher(name:HTMLInputElement,email:HTMLInputElement,office:HTMLInputElement,punct:HTMLInputElement):boolean{
    let teacher ={'_id':this.id,'name':name.value, 'email':email.value, 'office':office.value,'puntuation':+punct.value,'subjects':this.selectedSubjects}
    console.log("Updated: ");
    console.log(teacher);
    this.teachersServices.updateTeacher(teacher).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/teachers'])
      },
      err=>console.log(err)
    )
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
