import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user= {
    username: '',
    password: ''
  }
  constructor(private userService: UserService){}

  ngOnInit(){}

  formSubmit(){
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null){
      alert(' el nombre de -  es requerido');
      return;
    }

    this.userService.registrarUsuario(this.user).subscribe({
      next: (data) => {
        console.log(data);
        alert('usuario guradado con exito');
      },
      error: (error)=>{
        console.log(error.error);
        alert(error.error)
      }

    })
  }
}
