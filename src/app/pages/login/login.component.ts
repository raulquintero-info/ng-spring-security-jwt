import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    username: '',
    password:''
  }

  constructor(private loginService: LoginService, private router: Router){}

ngOnInit(){}


  formSubmit(){
    console.log('submit');
    if(this.loginData.username.trim() =='' || this.loginData.username.trim() == null ){
      alert('el nombre de usuario es requerido');
      return;
    }
    if(this.loginData.username.trim() =='' || this.loginData.username.trim() == null ){
      alert('la contraseña es requerido');
      return;
    }
    console.log('iniciando login');
    this.loginService.login(this.loginData).subscribe({
      next: (data: any)=>{
        console.log('data----', data);

        this.loginService.loginUser(data.accessToken);
        this.loginService.getCurrentUser().subscribe({
          next: (user: any) => {
            this.loginService.setUser(user);
            console.log('user',user);
            if(user.authorities[0].authority == "ADMIN"){
              this.router.navigateByUrl('/admin/dashboard');
              this.loginService.loginStatusSubject.next(true);
            }
            else if(this.loginService.getUserRole() == 'USER'){
              this.router.navigateByUrl('/user/dashboard');
              this.loginService.loginStatusSubject.next(true);
            }


          }
        })
      },
      error: (error: any)=>{
        console.log(error);
        if (error.status == 401) alert('Credenciales invalidas')
        else alert('ha habido un error en el servidor, intente mas tarde');
        // this.loginService.logout();
        // this.router.navigateByUrl('/');

      }
    })
  }

}
