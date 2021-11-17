import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  constructor(private subjectsService:SubjectService, private router:Router) { }

  ngOnInit(): void {
  }

  addSubject(name:HTMLInputElement,credits:HTMLInputElement):boolean
  {
    let subject = {'name':name.value,'numberStudents':+credits.value};
    this.subjectsService.createSubject(subject).subscribe(
      res=>{console.log(res)
      this.router.navigate(['/teachers'])},
      err=>console.log(err)
    )
    return false 
  }

}
