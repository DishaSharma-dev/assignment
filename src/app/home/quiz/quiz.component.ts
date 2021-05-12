import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/application-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  role?: string | null;
  userData: any;
  score: any;
  link: any;
  viewScore: boolean=false;

  constructor(private router:Router,private api:ApplicationServiceService) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.router.navigate(['login'])
    }

    let userName= sessionStorage.getItem('name');
    let usn= sessionStorage.getItem('usn');
    this.role= sessionStorage.getItem('role');

    this.api.getTaskInfo().subscribe((data)=>{
      this.userData=data;

     this.link = this.userData.find((val:any)=>val.usn=="1DS17IS005")?.link;
     this.score = this.userData.find((val:any)=>val.usn==usn)?.score;
    },(err)=>{})

  }

  // route(){
  //   this.router.navigateByUrl(this.link);
  // }

  view_score(){
    this.viewScore=!this.viewScore;
  }

}
