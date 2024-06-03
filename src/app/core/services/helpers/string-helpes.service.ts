import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringHelpesService {

  public truncateText(text: String, maxLength: number): String {
    if (text != undefined){
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength - 3) + '...';
    }return ''
    
    
  }


  constructor() { }
}
