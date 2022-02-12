import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from '../Models/icourse';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
    console.log("Coming from service");
  }
  //get
  GetCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>("http://localhost:8080/api/tutorialnews");
  }
  //post
  SaveNewCourse(course: ICourse) {

    return this.http.post("http://localhost:8080/api/tutorialnews", course);
  }
  //put
  UpdateCourse(course : ICourse) {
    console.log(course);
    return this.http.put("http://localhost:8080/api/tutorialnews/" + course.id, course);
  }

  RemoveCourse(id: number) {
    return this.http.delete("http://localhost:8080/api/tutorialnews/" + id);
  }
}
