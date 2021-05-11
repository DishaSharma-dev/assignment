import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datamodals',
  templateUrl: './datamodals.component.html',
  styleUrls: ['./datamodals.component.css']
})
export class DatamodalsComponent implements OnInit {

  constructor(
    private route: Router) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }
  }

}
