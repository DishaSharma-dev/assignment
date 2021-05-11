import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greedyalgo',
  templateUrl: './greedyalgo.component.html',
  styleUrls: ['./greedyalgo.component.css']
})
export class GreedyalgoComponent implements OnInit {

  constructor(
    private route: Router) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }
  }

}
