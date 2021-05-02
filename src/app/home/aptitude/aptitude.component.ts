import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css']
})
export class AptitudeComponent implements OnInit {

  constructor(private router : Router) {
    console.log(this.router.getCurrentNavigation()!.extras.state);
   }

  ngOnInit(): void {
  }

}
