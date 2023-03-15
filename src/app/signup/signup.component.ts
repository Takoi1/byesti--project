import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../auth/register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private service:RegisterService){

  }

myForm = new FormGroup({
  firstname : new FormControl(''),
  lastname: new FormControl(''),
  email : new FormControl(''),
  password : new FormControl(''),
  liste : new FormControl('')
})
sub(){
  console.log(this.myForm.value)
  this.service.signup(this.myForm.value).subscribe((data:any)=>{
    console.log(data.token)
  })


  console.log(this.myForm.value.liste)
}

get control():any
{
  return this.myForm
}



opt=false
selectedDay: string = '';

//event handler for the select element's change event

 selectChangeHandler (event: any) {
  //update the ui
  this.selectedDay = event.target.value;
  

}
}
