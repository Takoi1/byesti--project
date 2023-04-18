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
      this.route.navigate(["/user"])
    })
  
  }


}
