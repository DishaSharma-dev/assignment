import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApplicationServiceService } from 'src/app/application-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userData: any;
  scoreform: boolean=false;
  userform: any=false;
  usnForScore: any;
  viewTable: boolean=false;
  scoreData: any=[];
  haveData: boolean=false;
  quizData: string='';

  @ViewChild('quizLink')
  quizvalue!: ElementRef;
  constructor(private fb : FormBuilder,private api:ApplicationServiceService,
    private route: Router) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }
    this.api.getTaskInfo().subscribe((data)=>{
      this.userData=data;
      this.scoreData=this.userData.filter((val:any)=>val?.score?.length>0);

    },(err)=>{})
  }

  userForm = this.fb.group({
    usn : ['', [Validators.minLength(10), Validators.max(10), Validators.required]],
    name : ['', [Validators.required]],
    dob : ['', [Validators.required]]
  });

  scoreForm = this.fb.group({
    usn : ['', [Validators.minLength(10), Validators.max(10), Validators.required]],
    score : ['', [Validators.required]]
  });

  scorefunc(){
    this.userform=false;
    this.scoreform=!this.scoreform;
    this.viewTable;
  }

  userfunc(){
    this.scoreform=false;
    this.userform=!this.userform;
    this.viewTable=false;
  }

  quizFunc(data:any){
console.log(data);
let payload={
  usn:"1DS17IS005",
  link:data
}
let id=this.userData.find((val:any)=>val.usn=="1DS17IS005")?._id;
this.api.patchTaskInfo(id,payload).subscribe((data)=>{
  this.haveData=false;
  this.quizData=''
  this.quizvalue.nativeElement.innerText="";
  this.quizvalue.nativeElement.value="";

 alert("Quiz Link has been updated")
},(err)=>{
 alert('try again')
})
}

disableFunc(data:any){
if(data.length>0){
  this.haveData=true;
}else{
  this.haveData=false;
}
}

  viewScore(){
    this.viewTable=!this.viewTable;
    this.userform=false;
    this.scoreform=false;
  }

  addUser(){
    let payload={
      usn:this.userForm.value.usn,
      name:this.userForm.value.name,
      dob:this.userForm.value.dob
    }
   this.api.saveTaskInfo(payload).subscribe((data)=>{
    this.userform=false;
    this.userForm.reset();
     alert("User has been saved")
   },(err)=>{
     alert('try again')
   })
  }



  getUsn(event:any){
    this.usnForScore=event.target.value;
  }



  submitScore(){
    let payload={
      usn:this.usnForScore,
      score:this.scoreForm.value.score.toString()
    }
let id=this.userData.find((val:any)=>val.usn==this.usnForScore)?._id;
   this.api.patchTaskInfo(id,payload).subscribe((data)=>{
      this.scoreForm.reset();
      this.scoreform=false;
     alert("Score has been saved")
   },(err)=>{
     alert('try again')
   })
  }

}
