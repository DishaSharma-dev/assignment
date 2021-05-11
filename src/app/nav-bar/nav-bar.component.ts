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
  role?: string | null;
  adminFlag: boolean=false;

  constructor(private api:ApplicationServiceService,
    private route: Router) { }

   ngOnInit(): void {
    if(sessionStorage.getItem('token')!="authToken"){
      this.route.navigate(['login'])
    }

    this.userName=sessionStorage.getItem('userName')
    this.usn= sessionStorage.getItem('usn');
    this.role= sessionStorage.getItem('role');
    if(this.role=="admin"){
      this.adminFlag=true
    }

    console.log(sessionStorage,this.usn);

  }

  logout(){
    this.route.navigate(['login']);
    sessionStorage.removeItem('userName')
  sessionStorage.removeItem('usn');
  if(this.role){

    sessionStorage.removeItem('role');
     }
  }

}
