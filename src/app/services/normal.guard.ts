import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';


export const normalGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router)
  const loginService = inject(LoginService);
  
      let role = loginService.getUserRole();
      if(role == "USER"){
        return true;
      }

      router.navigate(['not-authorized']);
      return false;



  }
