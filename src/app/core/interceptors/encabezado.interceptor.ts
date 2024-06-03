import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/auth/login.service';
import { inject } from '@angular/core';
import { urlStatics, urlsToSkip } from './helpInterceptor';

export const encabezadoInterceptor: HttpInterceptorFn = (req, next) => {
  const logSer=inject(LoginService)
  const url = urlsToSkip;
  const urlWithoutParams = req.url.split('?')[0];
  const authToken=logSer.getToken();


  
   /* if(!(url.includes(urlWithoutParams))){
      const authReq = req.clone({
        setHeaders:{
          Authorization:`Bearer ${authToken}`
        }
      })
      return next(authReq);
    }else{
      return(next(req))
    }  */

    const url2 = urlStatics;
    const match = url2.some(partStatic=>req.url.startsWith(partStatic));
    if(!match){
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
