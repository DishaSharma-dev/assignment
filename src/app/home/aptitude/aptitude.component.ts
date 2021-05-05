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

  constructor(private router : Router) {
    console.log(this.router.getCurrentNavigation()!.extras.state);
   }

  ngOnInit(): void {
  }

clickMe1(){
  this.Ans1=true;
}

clickMe2(){
  this.Ans2=true;
}

}
