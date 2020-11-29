import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from 'src/app/model/Employee';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL="/assets/json/employee.json";
  baseURL1:string = environment.employeeUrl

  constructor(private http:HttpClient) { }


   public get():Observable<any>{
     return this.http.get<any>(this.baseURL+"/employee")
   }



  public getData():Observable<any>{
    return this.http.get<any>(this.baseURL);
  }

  public getData1():Observable<any>{
    return this.http.get<any>(this.baseURL1+"/employeeList");
  }

  post(data):Observable<any>{
      return this.http.post(this.baseURL1+"/addUser",data)
  }
}