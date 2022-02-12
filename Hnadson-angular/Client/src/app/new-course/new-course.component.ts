import { Component, OnInit } from '@angular/core';
import { ICourse } from '../Models/icourse';
import { FormsModule } from '@angular/forms';
import { CoursesService } from '../service/courses.service';


@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {


  course: ICourse = {} as ICourse;

  txtId: number = 0;
  txttitle: string = "";
  txtdescription: string = "";
  txtpublished: number = 0;
  txtfees: number = 0;
  
  constructor(private courseService: CoursesService) {

  }
  SaveCourse(): void {
    this.course.id = this.txtId;
    this.course.title = this.txttitle;
    this.course.description = this.txtdescription;
    this.course.published = this.txtpublished;
    this.course.fees = this.txtfees;
    
    
    this.courseService.SaveNewCourse(this.course).subscribe(res => { console.log(res); });
  }

  UpdateCourse(): void {
    this.course.id = this.txtId;
    this.course.title = this.txttitle;
    this.course.description = this.txtdescription;
    this.course.published = this.txtpublished;
    this.course.fees=this.txtfees;
    
    this.courseService.UpdateCourse(this.course).subscribe(res => { console.log(res); });
  }

  DeleteCourse(): void {
    this.courseService.RemoveCourse(this.txtId).subscribe(res => console.log(res));
  }
  ngOnInit(): void {
  }

}
