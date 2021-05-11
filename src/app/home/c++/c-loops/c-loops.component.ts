import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-loops',
  templateUrl: './c-loops.component.html',
  styleUrls: ['./c-loops.component.css']
})
export class CLoopsComponent implements OnInit {

  constructor(
    private route: Router) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }
  }

}
