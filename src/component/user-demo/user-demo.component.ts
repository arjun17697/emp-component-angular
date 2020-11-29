import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.scss']
})
export class UserDemoComponent implements OnInit {

  myval:number=0;
  num:any;
  isvalue:boolean=true;
  color="pink";

  constructor() { }

  ngOnInit(): void {
    console.log("Welcome")
  }

  ngOnChanges(change:SimpleChanges){
    console.log(change)
    console.log("hiiiiiiiiiiiiii")
    this.num=change
    console.log(change+"dddd"+this.num)
  }
}