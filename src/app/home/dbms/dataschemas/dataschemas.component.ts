import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dataschemas',
  templateUrl: './dataschemas.component.html',
  styleUrls: ['./dataschemas.component.css']
})
export class DataschemasComponent implements OnInit {

  constructor(
    private route: Router) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }
  }

}
