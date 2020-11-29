import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Helloworld';
  imgUrl="../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "";  
  nameError: string = "";  

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick($event){    
    console.log("Save button is clicked!", $event);    
    window.open(this.url, "_blank");
  }

  onInput($event){    
    console.log("Change Event Occurred!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    const spChars = RegExp('^[!&@]$');
    if(spChars.test($event.data)) {
      this.userName = this.userName.substring(0, this.userName.length-1);
      console.log("Special Event Occurred!", this.userName);
    }
    if (nameRegex.test(this.userName)) {
      this.nameError = "";  
      return;
    }
    this.nameError = "Name is Incorrect!";
  }  
}
