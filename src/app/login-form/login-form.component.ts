import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    collegeNumber : ['', [Validators.minLength(10), Validators.max(10), Validators.required]],
    dob : ['', [Validators.required]]
  });


  
  

  login()
  {
    console.log("Success");
  }
}
