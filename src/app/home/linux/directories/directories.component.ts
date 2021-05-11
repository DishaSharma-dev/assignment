import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directories',
  templateUrl: './directories.component.html',
  styleUrls: ['./directories.component.css']
})
export class DirectoriesComponent implements OnInit {

  constructor(
    private route: Router) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }
  }

}
