import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee = [];
  addForm: FormGroup;
  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee() {
    this.userService.getData1()
      .subscribe(response => {
        this.employee = response;
        console.log("Response" + JSON.stringify(this.employee));
      }, error => {
        console.log(error);
      });
  }
}