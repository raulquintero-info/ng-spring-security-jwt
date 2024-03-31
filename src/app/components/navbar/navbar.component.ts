import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // role: string = '';
  constructor(protected loginService: LoginService, private router: Router){}

  ngOnInit(){
    console.log('authorities',this.loginService.getUserRole())
  }


  getRole(){
    let user = JSON.parse(this.loginService.getUser()!)==undefined ? {username:''} : JSON.parse(this.loginService.getUser()!) ;
    return user.username! +'@'+this.loginService.getUserRole()
  }

  logout(){
    this.loginService.logout();
    this.router.navigateByUrl('/')
  }

}
