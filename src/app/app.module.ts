import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherPreviewComponent } from './components/teacher-preview/teacher-preview.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TeacherFormComponent } from './components/teacher-form/teacher-form.component';
import { SubjectFormComponent } from './components/subject-form/subject-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    TeacherPreviewComponent,
    NavigationComponent,
    TeacherFormComponent,
    SubjectFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
