import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/auth/login.service';
import { inject } from '@angular/core';

export const encabezadoInterceptor: HttpInterceptorFn = (req, next) => {
  const logSer=inject(LoginService)
 
  const authToken=logSer.getToken();
    if(authToken!=null){
      const authReq = req.clone({
        setHeaders:{
          Authorization:`Bearer ${authToken}`
        }
      })
      return next(authReq);
    }else{
      return(next(req))
    }
    
    
    

  
  
};
