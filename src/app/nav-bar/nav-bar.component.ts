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

  constructor(private api:ApplicationServiceService,
    private route: Router) { }

  ngOnInit(): void {

    this.userName=sessionStorage.getItem('userName')

  }

  logout(){

    this.route.navigate(['login']);
  }

}
