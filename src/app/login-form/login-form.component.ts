import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators } from '@angular/forms';
import { ApplicationServiceService } from '../application-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userData: any;

  constructor(private fb : FormBuilder,private api:ApplicationServiceService,
    private route: Router) { }

  ngOnInit(): void {
    this.api.getTaskInfo().subscribe((data)=>{
      this.userData=data;
    },(err)=>{})
  }

  loginForm = this.fb.group({
    usn : ['', [Validators.minLength(10), Validators.max(10), Validators.required]],
    dob : ['', [Validators.required]]
  });




  login(){

    let dob=this.loginForm.value.dob?.slice(0, 10).split('-').reverse().join('/');
    if(
      this.userData.find((val:any)=>val.dob==dob) &&
  this.userData.find((val:any)=>val.usn==this.loginForm.value.usn)){
    let name=this.userData.find((val:any)=>val.usn==this.loginForm.value.usn)?.name;
    let usn=this.userData.find((val:any)=>val.usn==this.loginForm.value.usn)?.usn;
    sessionStorage.setItem('userName',name);
    sessionStorage.setItem('usn',usn);
    this.route.navigate(['home']);
  }else{
    alert("Invalid User")
  }
  }
}
