import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newangular';
  name="Praju"
  inputData:string="" ;
  nameError:string="";
  imgPhoto="../assets/Images/Bridgelabz.jpeg"
 

  inputName(){ 
  console.log(this.inputData);
  const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
 if(nameRegex.test(this.inputData)){
  this.nameError="";
  return;
}
this.name="Name is incorrect";
}
}