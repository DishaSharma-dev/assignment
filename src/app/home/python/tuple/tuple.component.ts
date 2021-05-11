import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tuple',
  templateUrl: './tuple.component.html',
  styleUrls: ['./tuple.component.css']
})
export class TupleComponent implements OnInit {

  constructor(
    private route: Router) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }
  }

}
