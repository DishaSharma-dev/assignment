import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationServiceService } from '../application-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role?: string | null;
  userData: any;
  score: any;

  constructor(private api:ApplicationServiceService,
    private route: Router) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }

    let userName= sessionStorage.getItem('name');
    let usn= sessionStorage.getItem('usn');
    this.role= sessionStorage.getItem('role');

    this.api.getTaskInfo().subscribe((data)=>{
      this.userData=data;
     this.score = this.userData.find((val:any)=>val.usn==usn)?.score
    },(err)=>{})

  }

  logout(){
    this.route.navigate(['login']);
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('token');
  sessionStorage.removeItem('usn');
  if(this.role){

    sessionStorage.removeItem('role');
     }
  }

}
