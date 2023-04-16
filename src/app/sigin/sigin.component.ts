import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../auth/register.service';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent {


  constructor(private service:RegisterService,private route:Router){

  }

  myForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  
  })
  sub(){
  
    this.service.signin(this.myForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.user.liste === "Customer"){
        console.log("redirect to customer")
        localStorage.setItem("token",data.token)
      }else if (data.user.liste === "business"){
        console.log("redirect to business")
        localStorage.setItem("token",data.token)
      }else{
        console.log("redirect to admin")
        localStorage.setItem("token",data.token)
      }
      //this.route.navigate(["/user"])
    })
  
  }


}
