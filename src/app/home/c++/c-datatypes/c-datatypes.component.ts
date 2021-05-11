import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-datatypes',
  templateUrl: './c-datatypes.component.html',
  styleUrls: ['./c-datatypes.component.css']
})
export class CDatatypesComponent implements OnInit {

  constructor(
    private route: Router) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }
  }

}
