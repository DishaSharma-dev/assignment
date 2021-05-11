import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css']
})
export class AptitudeComponent implements OnInit {
  Ans1: boolean=false;
  Ans2: boolean=false;
  role?: string | null;
  adminFlag: boolean=false;

  constructor(private route : Router) {
    console.log(this.route.getCurrentNavigation()!.extras.state);
   }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }
    this.role= sessionStorage.getItem('role');
    if(this.role=="admin"){
      this.adminFlag=true
    }
  }

clickMe1(){
  this.Ans1=true;
}

clickMe2(){
  this.Ans2=true;
}

}
