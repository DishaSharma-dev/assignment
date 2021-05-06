import { Component, OnInit } from '@angular/core';
import { ApplicationServiceService } from '../application-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userName: string|null='';
  usn: string | null='';

  constructor(private api:ApplicationServiceService,
    private route: Router) { }

  ngOnInit(): void {

    this.userName=sessionStorage.getItem('userName')
    this.usn= sessionStorage.getItem('usn');
    console.log(sessionStorage,this.usn);

  }

  logout(){

    this.route.navigate(['login']);
  }

}
